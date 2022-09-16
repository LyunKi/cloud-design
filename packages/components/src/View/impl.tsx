import React, { forwardRef } from 'react'
import {
  View as RnView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { styles } from '../common/utils'
import { ThemeComponent, withTheme } from '../common/theme'
import { ViewProps } from './api'

export const View: ThemeComponent<ViewProps> = withTheme(
  forwardRef((props, ref?: React.Ref<RnView>) => {
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
