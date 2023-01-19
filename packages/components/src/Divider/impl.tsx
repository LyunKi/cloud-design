import React from 'react'
import { styles } from '../common/utils'
import { View } from '../View'
import { DividerProps } from './api'

export const Divider = (props: DividerProps) => {
  const { orientation, padding, color, size, ts } = props
  return (
    <View
      ts={{
        boxSizing: 'border-box',
        ...styles(
          [
            orientation === 'horizontal',
            {
              width: '100%',
              paddingHorizontal: padding,
              flexDirection: 'column',
            },
          ],
          [
            orientation === 'vertical',
            {
              height: '100%',
              paddingVertical: padding,
            },
          ]
        ),
        ...ts,
      }}
    >
      <View
        ts={{
          backgroundColor: color,
          ...styles(
            [
              orientation === 'horizontal',
              {
                height: size,
              },
            ],
            [
              orientation === 'vertical',
              {
                width: size,
              },
            ]
          ),
        }}
      />
    </View>
  )
}

Divider.defaultProps = {
  orientation: 'horizontal',
  padding: 0,
  size: 1,
  color: '$color.border.default',
}
