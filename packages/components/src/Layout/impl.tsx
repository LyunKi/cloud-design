import React, { forwardRef } from 'react'
import { View, ViewProps } from '../View'

export const Layout: React.FC<ViewProps> = forwardRef((props, ref) => {
  const { ts, ...rest } = props
  return (
    <View
      ref={ref}
      ts={{ backgroundColor: '$color.bg.layout', ...ts }}
      {...rest}
    />
  )
})
