import { Fn } from '@cloud-dragon/common-types'
import { Id, RenderProp, Themeable, ThemedStyle } from '../common'

export interface TabItem {
  id?: Id
  title: string | RenderProp
  renderContent?: RenderProp
}

export interface BasicTabsProps {
  items: TabItem[]
  value: string
  onChange?: Fn<[Id]>
  titleTs?: ThemedStyle
  contentTs?: ThemedStyle
}

export type TabsProps = Themeable<BasicTabsProps>
