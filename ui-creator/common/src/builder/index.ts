import {
  App,
  I18nManager,
  I18nPack,
  ThemeManager,
  ThemePack,
  View,
  Widget,
  Navigator,
} from '../models'
import { WidgetRegistry } from '../registries'

export interface BuildAppOptions {
  theme?: string
  locale?: string
}

export interface BuildWidgetOptions {
  themePack: ThemePack
  i18nPack: I18nPack
}

export interface BuildViewOptions {
  themePack: ThemePack
  i18nPack: I18nPack
}

export abstract class Builder<BuildConfig, BuildOptions, BuildResult> {
  public abstract build(
    config: BuildConfig,
    options?: BuildOptions
  ): BuildResult
}

export abstract class WidgetBuilder<WidgetInstance> extends Builder<
  Widget,
  BuildWidgetOptions,
  WidgetInstance
> {
  public abstract WidgetRegistry: WidgetRegistry

  public abstract build(
    config: Widget,
    options?: BuildWidgetOptions
  ): WidgetInstance
}

export abstract class ViewBuilder<WidgetInstance, ViewInstance> extends Builder<
  View,
  BuildViewOptions,
  ViewInstance
> {
  public abstract WidgetBuilder: WidgetBuilder<WidgetInstance>

  public abstract build(config: View, options?: BuildViewOptions): ViewInstance
}

export abstract class AppBuilder<
  AppInstance,
  WidgetInstance,
  ViewInstance
> extends Builder<App, BuildAppOptions, AppInstance> {
  public abstract ViewBuilder: ViewBuilder<WidgetInstance, ViewInstance>

  public abstract I18nManager: I18nManager

  public abstract ThemeManager: ThemeManager

  public abstract Navigator: Navigator

  public abstract build(config: App, options?: BuildAppOptions): AppInstance
}
