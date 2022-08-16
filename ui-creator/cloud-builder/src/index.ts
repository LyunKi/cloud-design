import {
  App,
  Builder,
  BuildOptions,
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
} from '@ui-creator/common'
import React, { ReactElement } from 'react'
import { ConfigProvider, ConfigProviderProps } from '@cloud-design/configs'
import { KV } from '@cloud-dragon/common-types'
import * as Linking from 'expo-linking'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native'

export class BasicCloudRnBuilder extends Builder<ReactElement> {
  Stack = createNativeStackNavigator()

  private parseConfigProps() {
    return {
      themePack: this.ThemeManager.themePack,
      locale: this.I18nManager.locale,
    }
  }

  private parseWidgetProps(props: Prop[]) {
    return props?.reduce((prev, prop) => {
      const { name, value } = prop
      prev[name] = value
      return prev
    }, {} as KV)
  }

  public buildWidgetSnippet = (widgetSnippet: WidgetSnippet) => {
    return widgetSnippet.children.map(this.buildWidget)
  }

  public buildWidget = (widget: Widget): ReactElement => {
    const { children, type, props } = widget
    return React.createElement(
      type,
      this.parseWidgetProps(props),
      children.map(this.buildWidget)
    )
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

  build(app: App, options: BuildOptions): ReactElement {
    const { themePacks, navigation, i18nPacks } = app
    const { theme = DEFAULT_THEME, locale = DEFAULT_LOCALE } = options
    this.I18nManager.configure(locale, i18nPacks)
    this.ThemeManager.configure(theme, themePacks)

    const configProps =
      this.parseConfigProps() as unknown as ConfigProviderProps
    return React.createElement(
      ConfigProvider,
      configProps,
      this.buildNavigation(navigation)
    )
  }
}

export const CloudRnBuilder = new BasicCloudRnBuilder()
