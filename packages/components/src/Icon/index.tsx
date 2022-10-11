import React from 'react'
import {
  Icon as OriginIcon,
  IconProps as OriginIconProps,
} from '@cloud-design/icons'
import { ActivityIndicator } from 'react-native'
import { ThemeManager } from '../common/theme'

export interface IconProps extends Omit<OriginIconProps, 'size'> {
  size?: number | string
}

export const Icon = (props: IconProps) => {
  const { size, name, color, ...rest } = props
  const computedSize = ThemeManager.themedValue(size)
  const computedColor = ThemeManager.themedValue(color)
  if (name === 'loading') {
    return (
      <ActivityIndicator
        style={{ width: computedSize, height: computedSize }}
        color={computedColor}
      />
    )
  }
  return (
    <OriginIcon
      name={name}
      size={computedSize}
      color={computedColor}
      {...rest}
    />
  )
}

Icon.defaultProps = {
  color: '$color.font.default',
}
