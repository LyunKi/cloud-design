import { KV } from '@cloud-dragon/common-types'
import React, { ReactElement, Fragment } from 'react'
import {
  WidgetBuilder,
  WidgetRegistry,
  Prop,
  Widget,
  ConfigManager,
  isRemPropValue,
  I18nManager,
  Navigator,
  ThemeManager,
  PropValue,
} from '@ui-creator/common'
import mapValues from 'lodash/mapValues'

const WIDGET_TYPE_RECORD: KV<number> = {}

function generateWidgetKey(type: string) {
  const count = WIDGET_TYPE_RECORD[type]
  const idSuffix = (count ?? -1) + 1
  const id = `${type}-${idSuffix}`
  WIDGET_TYPE_RECORD[type] = idSuffix
  return id
}

export class CloudRnWidgetBuilder extends WidgetBuilder<ReactElement> {
  public widgetRegistry: WidgetRegistry
  public i18nManager: I18nManager
  public themeManager: ThemeManager
  public configManager: ConfigManager
  public navigator: Navigator
  public constructor(
    widgetRegistry: WidgetRegistry,
    i18nManager: I18nManager,
    themeManager: ThemeManager,
    navigator: Navigator,
    configManager: ConfigManager
  ) {
    super()
    this.widgetRegistry = widgetRegistry
    this.themeManager = themeManager
    this.i18nManager = i18nManager
    this.navigator = navigator
    this.configManager = configManager
  }

  private parsePropValue(value: PropValue) {
    if (isRemPropValue(value)) {
      const number = parseFloat(value.slice('$rem:'.length))
      const { baseFontSize } = this.configManager.config
      if (Number.isNaN(number)) {
        console.error('Invalid rem value: ', value)
        return baseFontSize
      }
      return number * baseFontSize
    }
    return value
  }

  private parseWidgetProps(type: string, props: Prop[]) {
    return props?.reduce(
      (prev, prop) => {
        const { name, value, valueType } = prop
        let propValue = value
        if (valueType === 'object') {
          propValue = mapValues(value, (v) => {
            return this.parsePropValue(v)
          })
        } else {
          propValue = this.parsePropValue(value)
        }
        prev[name] = propValue
        return prev
      },
      {
        key: generateWidgetKey(type),
      } as KV
    )
  }

  public build(widget: Widget): ReactElement {
    const { children, type, props } = widget
    const instance = this.getWidgetInstance(type)
    return React.createElement(
      instance,
      this.parseWidgetProps(type, props),
      children?.map((child) => this.build(child))
    )
  }

  public getWidgetInstance(type: string) {
    const [namespace, specifier] = type.split(':')
    return (
      this.widgetRegistry.getInstance({
        namespace: namespace,
        type: specifier,
      }) ?? Fragment
    )
  }
}
