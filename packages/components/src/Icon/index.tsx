import React from 'react'
import { Icon as OriginIcon, IconProps } from '@cloud-design/icons'
import { ThemeManager } from '../common/theme'

export const Icon = (props: IconProps) => {
  const { size, color } = props
  return <OriginIcon {...props} {...ThemeManager.themed({ size, color })} />
}

Icon.defaultProps = {
  color: '$color.font.default',
}
