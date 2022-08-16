import { App, I18nManager, ThemeManager } from '../models'
import { ComponentRegistry } from '../registries'

export interface BuildOptions {
  theme?: string
  locale?: string
}

export abstract class Builder<AppInstance> {
  public ComponentRegistry = new ComponentRegistry()

  public I18nManager = new I18nManager()

  public ThemeManager = new ThemeManager()

  public Navigator = Navigator

  public abstract build(app: App, options?: BuildOptions): AppInstance
}
