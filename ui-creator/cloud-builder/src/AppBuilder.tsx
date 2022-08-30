import {
  App,
  BuildAppOptions,
  DEFAULT_LOCALE,
  DEFAULT_THEME,
  Navigation,
  RouteGroup,
  RouteItem,
  AppBuilder,
  I18nManager,
  ThemeManager,
  ConfigManager,
  WidgetRegistry,
  Navigator,
  ViewBuilder,
  WidgetBuilder,
  DEFAULT_APP_CONFIG,
} from '@ui-creator/common'
import React, { ReactElement } from 'react'
import { KV } from '@cloud-dragon/common-types'
import * as Linking from 'expo-linking'
import {
  createNavigationContainerRef,
  LinkingOptions,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import snakeCase from 'lodash/snakeCase'
import merge from 'lodash/merge'
import { CloudRnWidgetBuilder } from './WidgetBuilder'
import { CloudRnViewBuilder } from './ViewBuilder'

const Stack = createNativeStackNavigator()

export class CloudRnAppBuilder extends AppBuilder<
  ReactElement,
  ReactElement,
  ReactElement
> {
  public builderName: string
  public widgetRegistry: WidgetRegistry
  public i18nManager: I18nManager
  public themeManager: ThemeManager
  public configManager: ConfigManager
  public navigator: Navigator

  public constructor(builderName: string) {
    super()
    this.builderName = builderName
    this.widgetRegistry = new WidgetRegistry()
    this.i18nManager = new I18nManager()
    this.themeManager = new ThemeManager()
    this.configManager = new ConfigManager()
    this.navigator = createNavigationContainerRef()
    this.widgetBuilder = new CloudRnWidgetBuilder(
      this.widgetRegistry,
      this.i18nManager,
      this.themeManager,
      this.navigator,
      this.configManager
    )
    this.viewBuilder = new CloudRnViewBuilder(this.widgetBuilder)
  }
  public viewBuilder: ViewBuilder<ReactElement, ReactElement>
  public widgetBuilder: WidgetBuilder<ReactElement>

  private buildRouteItem = (item: RouteItem) => {
    const { name, view } = item
    return React.createElement(Stack.Screen, {
      name,
      key: name,
      component: () => this.viewBuilder.build(view),
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
        ref: this.navigator,
      } as any,
      this.buildRouteGroups(groups)
    )
  }

  public build(app: App, options: BuildAppOptions = {}): ReactElement {
    const { config, i18nPacks = {}, themePacks = {}, navigation } = app
    const { theme = DEFAULT_THEME, locale = DEFAULT_LOCALE } = options

    this.i18nManager.locale = locale
    this.i18nManager.i18nPacks = i18nPacks
    this.themeManager.theme = theme
    this.themeManager.themePacks = themePacks
    this.configManager.config = merge({}, DEFAULT_APP_CONFIG, config)

    return this.buildNavigation(navigation)
  }
}
