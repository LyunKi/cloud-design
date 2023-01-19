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

export type RenderProp<T = any[]> = Fn<T, ReactNode>

export type Id = string | number

export interface AccessoryProps {
  color: string
  size: number
}

export type AccessoryRenderProp = (props?: AccessoryProps) => ReactNode

export interface FormError {
  type: 'warning' | 'error'
  msg: string
}
