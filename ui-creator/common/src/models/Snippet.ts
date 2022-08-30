import { Widget } from './Widget'

export interface Snippet<ChildType, TagName extends 'Widget'> {
  name?: string
  tag: TagName
  children: ChildType[]
}

export type WidgetSnippet = Snippet<Widget, 'Widget'>
