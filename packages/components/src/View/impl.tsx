import React from 'react'
import { View as RnView, StyleSheet } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { ViewProps } from './api'

export const View: ThemedComponent<ViewProps> = withTheme((props) => {
  const { children, ts, style } = props
  return (
    <RnView style={StyleSheet.flatten([{ flexDirection: 'row' }, style, ts])}>
      {children}
    </RnView>
  )
})
