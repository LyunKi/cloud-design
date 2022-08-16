import {
  App,
  BuildAppOptions,
  Widget,
  WidgetSnippet,
  DEFAULT_LOCALE,
  DEFAULT_THEME,
  isWidgetSnippet,
  Navigation,
  RouteGroup,
  RouteItem,
  View,
  ViewChild,
  Prop,
  AppBuilder,
  I18nManager,
  ThemeManager,
  WidgetBuilder,
  BuildWidgetOptions,
} from '@ui-creator/common'
import React, { ReactElement } from 'react'
import { ConfigProvider, ConfigProviderProps } from '@cloud-design/configs'
import { KV } from '@cloud-dragon/common-types'
import * as Linking from 'expo-linking'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import { ComponentRegistry } from '@ui-creator/common/src/registries'

export const CloudRnComponentRegistry = new ComponentRegistry()
export const CloudRnI18nManager = new I18nManager()
export const CloudRnThemeManager = new ThemeManager()

export const CLOUD_DESIGN_COMPONENT = '@cloud-design/components'

export class BasicCloudRnWidgetBuilder extends WidgetBuilder<ReactElement> {
  public ComponentRegistry: ComponentRegistry = CloudRnComponentRegistry

  private parseWidgetProps(props: Prop[]) {
    return props?.reduce((prev, prop) => {
      const { name, value } = prop
      prev[name] = value
      return prev
    }, {} as KV)
  }

  public build(widget: Widget, options?: BuildWidgetOptions): ReactElement {
    const { children, type, props } = widget
    const instance = this.getWidgetInstance(type)
    return React.createElement(
      instance,
      this.parseWidgetProps(props),
      children.map((child) => this.build(child, options))
    )
  }
  public getWidgetInstance(type: string) {
    return (
      this.ComponentRegistry.getInstance({
        namespace: CLOUD_DESIGN_COMPONENT,
        type,
      }) ?? 'div'
    )
  }
}

export const CloudRnWidgetBuilder = new BasicCloudRnWidgetBuilder()

export class BasicCloudRnAppBuilder extends AppBuilder<
  ReactElement,
  ReactElement
> {
  public I18nManager: I18nManager = CloudRnI18nManager
  public ThemeManager: ThemeManager = CloudRnThemeManager
  public WidgetBuilder = CloudRnWidgetBuilder

  private Stack = createNativeStackNavigator()

  private parseConfigProps() {
    return {
      themePack: this.ThemeManager.themePack,
      locale: this.I18nManager.locale,
    }
  }

  public buildWidgetSnippet = (widgetSnippet: WidgetSnippet) => {
    return widgetSnippet.children.map(this.buildWidget)
  }

  public buildWidget = (widget: Widget): ReactElement => {
    return this.WidgetBuilder.build(widget)
  }

  private buildViewChild(viewChild: ViewChild) {
    return isWidgetSnippet(viewChild)
      ? this.buildWidgetSnippet(viewChild)
      : this.buildWidget(viewChild)
  }

  private buildView = (view: View) => {
    const { children } = view
    return React.createElement(
      SafeAreaView,
      null,
      children.flatMap(this.buildViewChild)
    )
  }

  private buildRouteItem = (item: RouteItem) => {
    const { name, view } = item
    return React.createElement(
      this.Stack.Screen,
      {
        name,
      } as any,
      this.buildView(view)
    )
  }

  private buildRouteGroup = (group: RouteGroup) => {
    const { items } = group
    return React.createElement(
      this.Stack.Group,
      {
        screenOptions: { headerShown: false },
      } as any,
      items.map(this.buildRouteItem)
    )
  }

  private buildRouteGroups(groups: RouteGroup[]) {
    return React.createElement(
      this.Stack.Navigator,
      null,
      groups.map(this.buildRouteGroup)
    )
  }

  private buildNavigation(navigation: Navigation) {
    const { initialRouteName, groups } = navigation
    const screens: KV<string> = {}
    groups.forEach((group) => {
      const { items } = group
      items.forEach((item) => {
        const { name } = item
        screens[name] = name
      })
    })
    const linking: LinkingOptions<any> = {
      prefixes: [Linking.createURL('/')],
      config: {
        initialRouteName,
        screens,
      },
    }
    return React.createElement(
      NavigationContainer,
      {
        linking,
        ref: this.Navigator,
      } as any,
      this.buildRouteGroups(groups)
    )
  }

  public build(app: App, options: BuildAppOptions): ReactElement {
    const { navigation } = app
    const { theme = DEFAULT_THEME, locale = DEFAULT_LOCALE } = options

    this.I18nManager.locale = locale
    this.ThemeManager.theme = theme

    const configProps =
      this.parseConfigProps() as unknown as ConfigProviderProps
    return React.createElement(
      ConfigProvider,
      configProps,
      this.buildNavigation(navigation)
    )
  }
}

export const CloudRnAppBuilder = new BasicCloudRnAppBuilder()
