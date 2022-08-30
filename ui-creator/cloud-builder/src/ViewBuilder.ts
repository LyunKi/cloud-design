import React, { ReactElement } from 'react'
import {
  ViewBuilder,
  WidgetSnippet,
  Widget,
  ViewChild,
  isWidgetSnippet,
  View,
  WidgetBuilder,
} from '@ui-creator/common'
import { SafeAreaView } from 'react-native'

export class CloudRnViewBuilder extends ViewBuilder<
  ReactElement,
  ReactElement
> {
  public widgetBuilder: WidgetBuilder<ReactElement>

  public constructor(widgetBuilder: WidgetBuilder<ReactElement>) {
    super()
    this.widgetBuilder = widgetBuilder
  }

  public buildWidgetSnippet = (widgetSnippet: WidgetSnippet) => {
    return widgetSnippet.children.map(this.buildWidget)
  }

  public buildWidget = (widget: Widget): ReactElement => {
    return this.widgetBuilder.build(widget)
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
