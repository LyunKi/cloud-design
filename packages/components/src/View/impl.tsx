import React, { forwardRef } from 'react'
import {
  View as RnView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { ThemeManager, styles } from '../common'
import { ViewProps } from './api'

export const View: React.FC<ViewProps> = forwardRef(
  (props: ViewProps, ref?: React.Ref<RnView>) => {
    const { ts, style, children, onPress } = props
    const Inner = (
      <RnView
        ref={ref}
        style={StyleSheet.flatten([
          { flexDirection: 'row' },
          styles([!!onPress, { cursor: 'pointer' }]),
          ThemeManager.themed(ts),
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
  }
)
