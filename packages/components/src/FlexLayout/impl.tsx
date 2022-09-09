import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { withTheme } from '../ConfigProvider'
import { View } from '../View'
import { FlexLayoutProps } from './api'

export const FlexLayout = withTheme(
  (props: PropsWithChildren<FlexLayoutProps>) => {
    const { children, direction = 'row', justify, align, style } = props
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
)
