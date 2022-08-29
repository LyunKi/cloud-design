import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { TextProps } from './api'

export const Text: ThemedComponent<TextProps> = withTheme((props) => {
  const { value, ts, style } = props
  return <RnText style={StyleSheet.flatten([style, ts])}>{value}</RnText>
})
