import {
  App,
  I18nManager,
  ThemeManager,
  View,
  Widget,
  Navigator,
  ConfigManager,
} from '../models'
import { WidgetRegistry } from '../registries'

export interface BuildAppOptions {
  theme?: string
  locale?: string
}

export abstract class WidgetBuilder<WidgetInstance> {
  public abstract widgetRegistry: WidgetRegistry

  public abstract i18nManager: I18nManager

  public abstract themeManager: ThemeManager

  public abstract configManager: ConfigManager

  public abstract navigator: Navigator

  public abstract build(config: Widget): WidgetInstance
}

export abstract class ViewBuilder<ViewInstance, WidgetInstance> {
  public abstract widgetBuilder: WidgetBuilder<WidgetInstance>

  public abstract build(config: View): ViewInstance
}

export abstract class AppBuilder<AppInstance, ViewInstance, WidgetInstance> {
  public abstract viewBuilder: ViewBuilder<ViewInstance, WidgetInstance>

  public abstract build(model: App, options?: BuildAppOptions): AppInstance
}
