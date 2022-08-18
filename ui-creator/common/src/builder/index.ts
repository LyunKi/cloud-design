import {
  App,
  I18nManager,
  I18nPack,
  I18nPacks,
  ThemeManager,
  ThemePack,
  ThemePacks,
  Widget,
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
export abstract class AppBuilder<AppInstance, WidgetInstance> extends Builder<
  App,
  BuildAppOptions,
  AppInstance
> {
  public abstract I18nManager: I18nManager

  public abstract ThemeManager: ThemeManager

  public abstract WidgetBuilder: WidgetBuilder<WidgetInstance>

  public registerI18n(i18nPacks: I18nPacks) {
    this.I18nManager.setI18nPacks(i18nPacks)
  }

  public registerTheme(themePacks: ThemePacks) {
    this.ThemeManager.setThemePacks(themePacks)
  }

  public abstract Navigator: any

  public abstract build(config: App, options?: BuildAppOptions): AppInstance
}
