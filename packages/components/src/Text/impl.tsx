import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemeComponent, ThemeManager, withTheme } from '../common/theme'
import { TextProps } from './api'

export const Text: ThemeComponent<TextProps> = withTheme((props) => {
  const { value, style, numberOfLines, size = 'md' } = props
  const fontSize = `$fontSize.${size}`
  const defaultStyle = ThemeManager.themed({
    display: 'inline-block',
    color: '$color.font.default',
    fontSize,
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
