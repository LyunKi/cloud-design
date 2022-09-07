import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemedComponent, useThemed, withTheme } from '../ConfigProvider'
import { TextProps } from './api'

export const Text: ThemedComponent<TextProps> = withTheme((props) => {
  const { value, style } = props
  const themed = useThemed()
  const defaultStyle = themed({
    display: 'flex',
    flexDirection: 'row',
    fontSize: '$fontSize.md',
    lineHeight: '$rem:1.5',
    color: '$color.font.default',
  })
  return (
    <RnText style={StyleSheet.flatten([defaultStyle, style])}>{value}</RnText>
  )
})
