import React from 'react'
import {
  Icon as OriginIcon,
  IconProps as OriginIconProps,
} from '@cloud-design/icons'
import { ActivityIndicator, Image } from 'react-native'
import { ThemeManager } from '../common/theme'
import { I18nManager } from '../common'

export interface IconProps extends Omit<OriginIconProps, 'size'> {
  size?: number | string
  pack?: string
}

export const COUNTRY_PACK = 'country'

export const Icon = (props: IconProps) => {
  const { size, name, color, pack, ...rest } = props
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
  if (pack === COUNTRY_PACK) {
    return I18nManager.isValidCountryCode(name) ? (
      <Image
        style={{ width: computedSize, height: computedSize, padding: 8 }}
        source={{ uri: I18nManager.getCountryByCode(name).flag }}
      />
    ) : (
      <OriginIcon
        name={'globe-outline'}
        size={computedSize}
        color={computedColor}
        {...rest}
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
