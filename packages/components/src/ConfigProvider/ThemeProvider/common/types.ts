import { KV } from '@cloud-dragon/common-types'
import { ComponentType, PropsWithChildren } from 'react'

export type CloudDesignTheme = KV<any>

export type PresetThemePack = 'cloud-light' | 'cloud-dark'

export type ThemePack = PresetThemePack | CloudDesignTheme

export type PropsWithThemeStyle<Props = any> = Props & {
  ts?: KV
  style?: KV
}

export type Themed<Props = any> = PropsWithThemeStyle<Props> & {
  theme?: CloudDesignTheme
}

export type ThemedComponent<Props = any> = ComponentType<
  PropsWithChildren<Themed<Props>>
>
