import React from 'react'
import { Icon as OriginIcon, IconProps } from '@cloud-design/icons'
import { ThemeManager } from '../ConfigProvider'

export const Icon = (props: IconProps) => {
  const { size, color = '$color.font.default' } = props
  return <OriginIcon {...props} {...ThemeManager.themed({ size, color })} />
}
