import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ThemeManager } from '../common'
import { AvatarProps } from './api'

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { ts, style, size, src } = props
  const themedStyle = ThemeManager.themed({
    borderRadius: '$radius.full',
    width: size,
    height: size,
    ...ts,
  })
  return <Image style={StyleSheet.flatten([themedStyle, style])} source={src} />
}

Avatar.defaultProps = {
  size: 24,
}
