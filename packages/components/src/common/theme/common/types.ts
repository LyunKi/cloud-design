import { Fn, KV } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'

export type CloudDesignTheme = KV<any>

export type ThemePack = KV<CloudDesignTheme>

export type ThemeStyle = KV

export type RnStyle = KV

export type ThemedStyle = KV

export type Themeable<Props = any> = Props & {
  ts?: ThemeStyle
  style?: RnStyle
}

export interface AccessoryProps {
  color: string
  size: number
}

export type AccessoryRenderProp = (props?: AccessoryProps) => ReactNode

export type RenderProp = Fn<any, ReactNode>

export interface FormError {
  type: 'warning' | 'error'
  msg: string
}
