import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemedComponent, ThemeManager, withTheme } from '../ConfigProvider'
import { TextProps } from './api'

export const Text: ThemedComponent<TextProps> = withTheme((props) => {
  const { value, style, numberOfLines } = props
  const defaultStyle = ThemeManager.themed({
    display: 'inline-block',
    color: '$color.font.default',
    fontSize: '$fontSize.md',
    lineHeight: '$rem:1.5',
  })
  return (
    <RnText
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten([
        defaultStyle,
        style,
        numberOfLines && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: numberOfLines,
        },
      ])}
    >
      {value}
    </RnText>
  )
})
