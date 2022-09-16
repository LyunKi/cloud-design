import React, { forwardRef } from 'react'
import { Pressable } from 'react-native'
import { KV } from '@cloud-dragon/common-types'
import { ThemedComponent, withTheme } from '../common/theme'
import { View } from '../View'
import { Text } from '../Text'
import { styles } from '../common/utils'
import { ButtonProps, ButtonStatus } from './api'

function getColorSchemeByStatus(status: ButtonStatus) {
  switch (status) {
    case 'primary':
      return 'brand'
    case 'secondary':
      return 'gray'
    case 'info':
      return 'blue'
    case 'warning':
      return 'orange'
    case 'success':
      return 'green'
    case 'error':
      return 'red'
    case 'disabled':
      return 'blackAlpha'
  }
}

function computeStyles({ variant, status, pressed }: any): any {
  if (status === 'secondary') {
    return {
      computedViewStyle: {
        backgroundColor: pressed ? `$color.gray.300` : `$color.gray.100`,
      },
    }
  }
  const colorScheme = getColorSchemeByStatus(status)
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

export const Button: ThemedComponent<ButtonProps> = withTheme(
  forwardRef((props) => {
    const {
      value,
      style,
      variant = 'solid',
      status = 'primary',
      textTs,
      onPress,
      renderLeft,
      renderRight,
      viewRef,
    } = props
    const disabled = status === 'disabled'
    const conditionStyle = styles([
      disabled,
      {
        cursor: 'not-allowed',
        opacity: `$opacity.disabled`,
      },
    ])
    return (
      <Pressable disabled={disabled} onPress={onPress}>
        {({ pressed }) => {
          const { computedViewStyle, computedTextStyle } = computeStyles({
            variant,
            status,
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
              ref={viewRef}
              ts={{
                ...conditionStyle,
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
)
