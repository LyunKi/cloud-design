import React, { PropsWithChildren } from 'react'
import { View } from '../View'
import { FlexLayoutProps } from './api'

export function FlexLayout(props: PropsWithChildren<FlexLayoutProps>) {
  const { children, direction = 'row', justify, align } = props
  return (
    <View
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </View>
  )
}
