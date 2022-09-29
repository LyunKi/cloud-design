import React from 'react'
import { Text as RnText, StyleSheet } from 'react-native'
import { ThemeManager } from '../common/theme'
import { TextProps } from './api'

export const Text: React.FC<TextProps> = (props) => {
  const { value, ts, style, numberOfLines, size = 'md' } = props
  const fontSize = `$fontSize.${size}`
  const computedStyle = ThemeManager.themed({
    display: 'inline-block',
    color: '$color.font.default',
    fontSize,
    ...ts,
  })
  return (
    <RnText
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten([
        computedStyle,
        numberOfLines && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: numberOfLines,
        },
        style,
      ])}
    >
      {value}
    </RnText>
  )
}
