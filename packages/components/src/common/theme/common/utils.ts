import { merge } from 'lodash'
import React, {
  PropsWithChildren,
  ComponentType,
  forwardRef,
  useContext,
} from 'react'
import { StyleSheet } from 'react-native'
import { ConfigContext } from '../../../ConfigProvider'
import {
  CloudDesignTheme,
  PresetThemePack,
  Themed,
  ThemeComponent,
} from './types'
import { DEFAULT_THEME } from './constants'
import { ThemeManager } from './ThemeManager'

export function withTheme<Props = any>(
  Component: ComponentType<Themed<PropsWithChildren<Props>>>
): ThemeComponent<Props> {
  //@ts-ignore
  return forwardRef((props, ref) => {
    const ready = useContext(ConfigContext)
    const { ts = {}, children, style, ...others } = props
    return (
      ready &&
      React.createElement(
        Component,
        {
          style: StyleSheet.flatten([ThemeManager.themed(ts), style]),
          ref,
          ...others,
        } as any,
        children
      )
    )
  })
}

export function extendTheme(
  themePack: CloudDesignTheme,
  presetThemePack: PresetThemePack = 'cloud-light'
) {
  return merge({}, DEFAULT_THEME[presetThemePack], themePack)
}
