import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { withTheme } from '../ConfigProvider'
import { View } from '../View'
import { FlexLayoutProps } from './api'

export const FlexLayout = withTheme(
  (props: PropsWithChildren<FlexLayoutProps>) => {
    const {
      children,
      direction = 'row',
      justify,
      align,
      style,
      spacing,
      wrap,
    } = props
    return (
      <View
        style={StyleSheet.flatten([
          {
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            gap: spacing,
            flexWrap: wrap ? 'wrap' : 'nowrap',
          },
          style,
        ])}
      >
        {children}
      </View>
    )
  }
)
