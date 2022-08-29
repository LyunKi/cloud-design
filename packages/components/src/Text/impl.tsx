import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { TextProps } from './api'

export const Text: ThemedComponent<TextProps> = withTheme((props) => {
  const { children, ts, style } = props
  return <RnText style={StyleSheet.flatten([style, ts])}>{children}</RnText>
})
