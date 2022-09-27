import React, { PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { withTheme } from '../common/theme'
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
      onPress,
    } = props
    return (
      <View
        onPress={onPress}
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
