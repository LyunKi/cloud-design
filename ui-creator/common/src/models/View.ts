import { Widget } from './Widget'
import { WidgetSnippet } from './Snippet'

export type ViewChild = Widget | WidgetSnippet

export interface View {
  children: ViewChild[]
}

export function isWidgetSnippet(
  viewChild: ViewChild
): viewChild is WidgetSnippet {
  return Reflect.get(viewChild, 'tag') === 'Widget'
}
