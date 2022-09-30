import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeManager } from '../common'
import { SafeAreaProps } from './api'

export const SafeArea: React.FC<SafeAreaProps> = (props) => {
  const { ts, style, ...rest } = props
  return (
    <SafeAreaView
      style={StyleSheet.flatten([
        { flexDirection: 'row' },
        ThemeManager.themed(ts),
        style,
      ])}
      {...rest}
    />
  )
}
