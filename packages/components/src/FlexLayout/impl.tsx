import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../View'
import { FlexLayoutProps } from './api'

export function FlexLayout(props: PropsWithChildren<FlexLayoutProps>) {
  const { children, direction = 'row', justify, align, style, ts } = props
  return (
    <View
      style={StyleSheet.flatten([
        style,
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
        },
      ])}
    >
      {children}
    </View>
  )
}
