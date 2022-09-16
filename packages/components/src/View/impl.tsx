import React, { forwardRef } from 'react'
import {
  View as RnView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { styles } from '../common/utils'
import { ThemedComponent, withTheme } from '../common/theme'
import { ViewProps } from './api'

export const View: ThemedComponent<ViewProps> = withTheme(
  forwardRef((props, ref: any) => {
    const { style, children, onPress } = props
    const Inner = (
      <RnView
        ref={ref}
        style={StyleSheet.flatten([
          { flexDirection: 'row' },
          styles([!!onPress, { cursor: 'pointer' }]),
          style,
        ])}
      >
        {children}
      </RnView>
    )
    return onPress ? (
      <TouchableWithoutFeedback onPress={onPress}>
        {Inner}
      </TouchableWithoutFeedback>
    ) : (
      Inner
    )
  })
)
