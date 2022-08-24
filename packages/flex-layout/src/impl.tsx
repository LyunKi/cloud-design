import React, { PropsWithChildren } from 'react'
import { View as RnView } from 'react-native'
import { FlexLayoutProps } from './api'

export function FlexLayout(props: PropsWithChildren<FlexLayoutProps>) {
  const { children, direction, justify, align } = props
  return (
    <RnView
      style={{
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </RnView>
  )
}
