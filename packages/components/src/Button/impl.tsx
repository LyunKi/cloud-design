import React from 'react'
import { Pressable } from 'react-native'
import { ThemedComponent, ThemeManager, withTheme } from '../ConfigProvider'
import { View } from '../View'
import { Text } from '../Text'
import { ButtonProps, ButtonStatus } from './api'
import { KV } from '@cloud-dragon/common-types'

function computeStyles({ variant, colorScheme, pressed }: any): any {
  const color = `$color.${colorScheme}.500`
  const weightColor = `$color.${colorScheme}.700`
  const lightColor = `$color.${colorScheme}.100`
  switch (variant) {
    case 'solid': {
      return {
        computedViewStyle: {
          backgroundColor: pressed ? weightColor : color,
        },
        computedTextStyle: {
          color: '$color.white',
        },
      }
    }
    case 'outline': {
      return {
        computedViewStyle: {
          borderStyle: 'solid',
          backgroundColor: pressed ? lightColor : `$color.white`,
          borderWidth: 1,
          borderColor: color,
        },
        computedTextStyle: {
          color,
        },
      }
    }
    case 'ghost': {
      return {
        computedViewStyle: {
          backgroundColor: pressed ? lightColor : `$color.white`,
        },
        computedTextStyle: {
          color,
        },
      }
    }
    case 'link': {
      const pressedStyle = pressed && {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: weightColor,
      }
      return {
        computedViewStyle: {},
        computedTextStyle: {
          ...pressedStyle,
          color: pressed ? weightColor : color,
        },
      }
    }
  }
}

function getColorSchemeByStatus(status: ButtonStatus) {
  switch (status) {
    case 'primary':
      return 'brand'
    case 'info':
      return 'blue'
    case 'warning':
      return 'orange'
    case 'success':
      return 'green'
    case 'error':
      return 'red'
  }
}

export const Button: ThemedComponent<ButtonProps> = withTheme((props) => {
  const {
    value,
    style,
    variant = 'solid',
    status = 'primary',
    textTs,
    onPress,
    renderLeft,
    renderRight,
  } = props
  const colorScheme = getColorSchemeByStatus(status)
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        const { computedViewStyle, computedTextStyle } = computeStyles({
          variant,
          colorScheme,
          pressed,
        })
        const mergedStyle: KV = {
          fontSize: '$fontSize.md',
          fontWeight: '$fontWeight.semibold',
          ...computedTextStyle,
          ...textTs,
        }
        return (
          <View
            ts={{
              borderRadius: '$radius.md',
              alignItems: 'center',
              justifyContent: 'center',
              height: '$size.10',
              paddingHorizontal: '$spacing.4',
              gap: '$rem: 0.5',
              ...computedViewStyle,
              ...style,
            }}
          >
            {renderLeft &&
              renderLeft({
                color: mergedStyle.color,
                size: mergedStyle.fontSize,
              })}
            {value && <Text ts={mergedStyle} value={value} />}
            {renderRight &&
              renderRight({
                color: mergedStyle.color,
                size: mergedStyle.fontSize,
              })}
          </View>
        )
      }}
    </Pressable>
  )
})
