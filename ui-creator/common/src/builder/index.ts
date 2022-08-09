import { App } from '../models'

export abstract class Builder<Widget, AppInstance> {
  protected widgetRegistries: Map<string, Widget> = new Map()

  public registerWidget(type: string, widget: Widget): void {
    this.widgetRegistries.set(type, widget)
  }

  public abstract build(app: App): AppInstance
}
