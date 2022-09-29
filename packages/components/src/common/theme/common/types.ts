import { KV } from '@cloud-dragon/common-types'
import { ReactElement } from 'react'

export type CloudDesignTheme = KV<any>

export type PresetThemePack = 'cloud-light' | 'cloud-dark'

export type ThemePack = PresetThemePack | CloudDesignTheme

export type ThemeStyle = KV

export type RnStyle = KV

export type ThemedStyle = KV

export type Themeable<Props = any> = Props & {
  ts?: ThemeStyle
  style?: RnStyle
}

export type Themed<Props = any> = Props & {
  style?: ThemedStyle
}

export type ThemeComponent<Props = any> = React.FC<Props>

export interface AccessoryProps {
  color: string
  size: number
}

export type AccessoryRenderProp = (props?: AccessoryProps) => ReactElement

export interface FormError {
  type: 'warning' | 'error'
  msg: string
}
