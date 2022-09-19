import React, { forwardRef } from 'react'
import { Pressable } from 'react-native'
import { KV } from '@cloud-dragon/common-types'
import { ThemeComponent, withTheme } from '../common/theme'
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
  }
}

function computeStyles({ variant, status, pressed }: any): any {
  if (status === 'disabled') {
    return {
      computedViewStyle: {
        backgroundColor: '$color.bg.disabled',
      },
    }
  }
  if (status === 'secondary') {
    return {
      computedViewStyle: {
        backgroundColor: pressed ? `$color.bg.secondary` : `transparent`,
        borderColor: `$color.border.default`,
        borderWidth: 1,
        borderStyle: 'solid',
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
          color: '$color.font.reverse',
        },
      }
    }
    case 'outline': {
      return {
        computedViewStyle: {
          borderStyle: 'solid',
          backgroundColor: pressed ? lightColor : `$color.bg.layout`,
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
          backgroundColor: pressed ? lightColor : `$color.bg.layout`,
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

export const Button: ThemeComponent<ButtonProps> = withTheme(
  forwardRef((props) => {
    const {
      value,
      style,
      variant,
      status,
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
          const mergedTs: KV = {
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
                  color: mergedTs.color,
                  size: mergedTs.fontSize,
                })}
              {value && <Text ts={mergedTs} value={value} />}
              {renderRight &&
                renderRight({
                  color: mergedTs.color,
                  size: mergedTs.fontSize,
                })}
            </View>
          )
        }}
      </Pressable>
    )
  })
)

Button.defaultProps = {
  variant: 'solid',
  status: 'primary',
}
