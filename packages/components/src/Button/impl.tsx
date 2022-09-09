import React from 'react'
import { Pressable } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { View } from '../View'
import { Text } from '../Text'
import { ButtonProps } from './api'

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

export const Button: ThemedComponent<ButtonProps> = withTheme((props) => {
  const {
    value = '',
    style,
    variant = 'solid',
    colorScheme = 'brand',
    textTs,
    onPress,
  } = props
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => {
        const { computedViewStyle, computedTextStyle } = computeStyles({
          variant,
          colorScheme,
          pressed,
        })
        return (
          <View
            ts={{
              borderRadius: '$radius.md',
              alignItems: 'center',
              justifyContent: 'center',
              height: '$size.10',
              paddingHorizontal: '$spacing.4',
              ...computedViewStyle,
              ...style,
            }}
          >
            <Text
              ts={{
                ...computedTextStyle,
                ...textTs,
                fontWeight: '$fontWeight.semibold',
              }}
              value={value}
            />
          </View>
        )
      }}
    </Pressable>
  )
})
