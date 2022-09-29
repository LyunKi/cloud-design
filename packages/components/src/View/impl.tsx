import React, { forwardRef } from 'react'
import {
  View as RnView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { styles } from '../common/utils'
import { withTheme } from '../common/theme'
import { ViewProps } from './api'

export const View: React.FC<ViewProps> = withTheme(
  forwardRef((props: ViewProps, ref?: React.Ref<RnView>) => {
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
