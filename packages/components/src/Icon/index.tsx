import React from 'react'
import {
  Icon as OriginIcon,
  IconProps as OriginIconProps,
} from '@cloud-design/icons'
import { ThemeManager } from '../common/theme'

export interface IconProps extends Omit<OriginIconProps, 'size'> {
  size?: number | string
}

export const Icon = (props: IconProps) => {
  const { size, color, ...rest } = props
  return <OriginIcon {...rest} {...ThemeManager.themed({ size, color })} />
}

Icon.defaultProps = {
  color: '$color.font.default',
}
