import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { ThemeManager } from '../common'
import { Icon } from '../Icon'
import { View } from '../View'
import { AvatarProps } from './api'

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { ts, style, size, src } = props
  const themeStyle = ThemeManager.themed({
    borderRadius: '$radius.full',
    width: size,
    height: size,
    ...ts,
  })
  const computedStyle = StyleSheet.flatten([themeStyle, style])
  if (!src) {
    return (
      <View ts={{ ...computedStyle, backgroundColor: '$color.gray.400' }}>
        <Icon color="white" name="person" size={size} />
      </View>
    )
  }
  return <Image style={computedStyle} source={src} />
}

Avatar.defaultProps = {
  size: 24,
}
