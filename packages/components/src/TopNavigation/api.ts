import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'
import { AccessoryRenderProp, Themeable, ThemeStyle } from '../common'

interface TitleProps {
  textTs: ThemeStyle
}

export interface BasicTopNavigationProps {
  title?: string | Fn<[TitleProps], ReactNode>
  goBack?: Fn
  renderLeft?: AccessoryRenderProp
  renderRight?: AccessoryRenderProp
}

export type TopNavigationProps = Themeable<BasicTopNavigationProps>
