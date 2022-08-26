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
  WidgetRegistry,
  ViewBuilder,
} from '@ui-creator/common'
import React, { Fragment, ReactElement } from 'react'
import { ConfigProvider, ConfigProviderProps } from '@cloud-design/components'
import { KV } from '@cloud-dragon/common-types'
import * as Linking from 'expo-linking'
import {
  createNavigationContainerRef,
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'
import snakeCase from 'lodash/snakeCase'

export const CloudRnWidgetRegistry = new WidgetRegistry()
export const CloudRnI18nManager = new I18nManager()
export const CloudRnThemeManager = new ThemeManager()
export const Navigator = createNavigationContainerRef()

export const CLOUD_DESIGN_NAMESPACE = '@cloud-design'

const WIDGET_TYPE_RECORD: KV<number> = {}

function generateWidgetKey(type: string) {
  const count = WIDGET_TYPE_RECORD[type]
  const idSuffix = (count ?? -1) + 1
  const id = `${type}-${idSuffix}`
  WIDGET_TYPE_RECORD[type] = idSuffix
  return id
}

export class BasicCloudRnWidgetBuilder extends WidgetBuilder<ReactElement> {
  public WidgetRegistry: WidgetRegistry = CloudRnWidgetRegistry

  private parseWidgetProps(type: string, props: Prop[]) {
    return props?.reduce(
      (prev, prop) => {
        const { name, value } = prop
        prev[name] = value
        return prev
      },
      {
        key: generateWidgetKey(type),
      } as KV
    )
  }

  public build(widget: Widget, options?: BuildWidgetOptions): ReactElement {
    const { children, type, props } = widget
    const instance = this.getWidgetInstance(type)
    return React.createElement(
      instance,
      this.parseWidgetProps(type, props),
      children?.map((child) => this.build(child, options))
    )
  }

  public registerWidget(type: string, instance: React.ElementType) {
    this.WidgetRegistry.registerInstances({
      namespace: CLOUD_DESIGN_NAMESPACE,
      instances: {
        [type]: instance,
      },
    })
  }

  public getWidgetInstance(type: string) {
    return (
      this.WidgetRegistry.getInstance({
        namespace: CLOUD_DESIGN_NAMESPACE,
        type,
      }) ?? Fragment
    )
  }
}

export const CloudRnWidgetBuilder = new BasicCloudRnWidgetBuilder()

export class BasicCloudRnViewBuilder extends ViewBuilder<
  ReactElement,
  ReactElement
> {
  public WidgetBuilder = CloudRnWidgetBuilder

  public buildWidgetSnippet = (widgetSnippet: WidgetSnippet) => {
    return widgetSnippet.children.map(this.buildWidget)
  }

  public buildWidget = (widget: Widget): ReactElement => {
    return this.WidgetBuilder.build(widget)
  }

  private buildViewChild = (viewChild: ViewChild) => {
    return isWidgetSnippet(viewChild)
      ? this.buildWidgetSnippet(viewChild)
      : this.buildWidget(viewChild)
  }

  public build(view: View): ReactElement {
    const { children } = view
    return React.createElement(
      SafeAreaView,
      null,
      children.flatMap(this.buildViewChild)
    )
  }
}

export const CloudRnViewBuilder = new BasicCloudRnViewBuilder()

const Stack = createNativeStackNavigator()

export class BasicCloudRnAppBuilder extends AppBuilder<
  ReactElement,
  ReactElement,
  ReactElement
> {
  public Navigator = Navigator

  public I18nManager: I18nManager = CloudRnI18nManager

  public ThemeManager: ThemeManager = CloudRnThemeManager

  public ViewBuilder = CloudRnViewBuilder

  private parseConfigProps() {
    return {
      themePack: this.ThemeManager.themePack,
      locale: this.I18nManager.locale,
    }
  }

  private buildRouteItem = (item: RouteItem) => {
    const { name, view } = item
    return React.createElement(Stack.Screen, {
      name,
      key: name,
      component: () => this.ViewBuilder.build(view),
    } as any)
  }

  private buildRouteGroup = (group: RouteGroup) => {
    const { items, name } = group
    return React.createElement(
      Stack.Group,
      {
        key: name,
        screenOptions: { headerShown: false },
      } as any,
      items.map(this.buildRouteItem)
    )
  }

  private buildRouteGroups = (groups: RouteGroup[]) => {
    return React.createElement(
      Stack.Navigator,
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
        screens[name] = snakeCase(name)
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
        ref: Navigator,
      } as any,
      this.buildRouteGroups(groups)
    )
  }

  public build(app: App, options: BuildAppOptions = {}): ReactElement {
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
