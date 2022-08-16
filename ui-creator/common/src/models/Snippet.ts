import { Widget } from './Widget'

export interface Snippet<ChildType, TagName extends string> {
  name?: string
  tag: TagName
  children: ChildType[]
}

export type WidgetSnippet = Snippet<Widget, 'Widget'>
