import React, { PropsWithChildren } from 'react'
import { View as RnView } from 'react-native'
import { ViewProps } from './api'

export function View(props: PropsWithChildren<ViewProps>) {
  const { children } = props
  return <RnView>{children}</RnView>
}
