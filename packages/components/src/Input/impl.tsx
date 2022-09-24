import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { ThemeManager } from '../common'
import { InputProps } from './api'

export const Input: React.FC<InputProps> = (props) => {
  const { ts, style } = props
  const themedStyle = ThemeManager.themed(ts)
  return <TextInput style={StyleSheet.flatten([themedStyle, style])} />
}

Input.defaultProps = {}
