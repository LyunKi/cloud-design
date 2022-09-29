import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { View } from '../View'
import { FlexLayoutProps } from './api'

export const FlexLayout = (props: PropsWithChildren<FlexLayoutProps>) => {
  const {
    children,
    direction = 'row',
    justify,
    align,
    ts,
    style,
    spacing,
    wrap,
    onPress,
  } = props
  return (
    <View
      onPress={onPress}
      ts={StyleSheet.flatten([
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          gap: spacing,
          flexWrap: wrap ? 'wrap' : 'nowrap',
        },
        ts,
      ])}
      style={style}
    >
      {children}
    </View>
  )
}
