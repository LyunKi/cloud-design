import React from 'react'
import { styles } from '../common/utils'
import { View } from '../View'
import { DividerProps } from './api'

export const Divider = (props: DividerProps) => {
  const { orientation, padding, color } = props
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
      }}
    >
      <View
        ts={{
          backgroundColor: color,
          ...styles(
            [
              orientation === 'horizontal',
              {
                height: 1,
              },
            ],
            [
              orientation === 'vertical',
              {
                width: 1,
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
  color: '$color.gray.200',
}
