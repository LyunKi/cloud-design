import React from 'react'
import { Pressable } from 'react-native'
import { KV } from '@cloud-dragon/common-types'
import { isFunction, isString } from 'lodash'
import { ThemeManager } from '../common/theme'
import { View } from '../View'
import { Text } from '../Text'
import { opacity, styles } from '../common/utils'
import { ButtonProps, ButtonStatus } from './api'

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

function computeNormalStyle({ variant, pressed, hovered }: any) {
  switch (variant) {
    case 'solid': {
      const colorScheme = ThemeManager.isDark ? 'whiteAlpha' : 'gray'
      const bgBase = ThemeManager.isDark ? 200 : 100
      const bg = `$color.${colorScheme}.${bgBase}`
      const hoveredBg = `$color.${colorScheme}.${bgBase + 100}`
      const pressedBg = `$color.${colorScheme}.${bgBase + 200}`
      return {
        computedViewStyle: {
          backgroundColor: bg,
          ...styles(
            [
              hovered,
              {
                backgroundColor: hoveredBg,
              },
            ],
            [
              pressed,
              {
                backgroundColor: pressedBg,
              },
            ]
          ),
        },
      }
    }
    case 'outline':
    case 'ghost': {
      return {
        computedViewStyle: {
          backgroundColor: 'transparent',
          ...styles(
            [
              hovered,
              {
                backgroundColor: '$color.bg.normal.hovered',
              },
            ],
            [
              pressed,
              {
                backgroundColor: '$color.bg.normal.pressed',
              },
            ],
            [
              variant === 'outline',
              {
                borderColor: `$color.border.default`,
                borderWidth: 1,
                borderStyle: 'solid',
              },
            ]
          ),
        },
      }
    }
    case 'link': {
      return {
        computedViewStyle: {},
        computedTextStyle: {
          ...styles([
            hovered || pressed,
            {
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecorationColor: '$color.font.default',
            },
          ]),
        },
      }
    }
  }
}

function computeColoredStyle({ variant, status, pressed, hovered }: any) {
  const colorScheme = getColorSchemeByStatus(status)
  const colorBase = ThemeManager.isDark ? 200 : 500
  const color = `$color.${colorScheme}.${colorBase}`
  const fontColor =
    status === 'normal' ? '$color.font.default' : '$color.font.reverse'
  switch (variant) {
    case 'solid': {
      const hoveredBg = `$color.${colorScheme}.${colorBase + 100}`
      const pressedBg = `$color.${colorScheme}.${colorBase + 200}`
      return {
        computedViewStyle: {
          backgroundColor: color,
          ...styles(
            [
              hovered,
              {
                backgroundColor: hoveredBg,
              },
            ],
            [
              pressed,
              {
                backgroundColor: pressedBg,
              },
            ]
          ),
        },
        computedTextStyle: {
          color: fontColor,
        },
      }
    }
    case 'outline':
    case 'ghost': {
      const darkBg = ThemeManager.themedValue(`$color.${colorScheme}.200`)
      const hoveredBg = ThemeManager.isDark
        ? opacity(darkBg, '1f')
        : `$color.${colorScheme}.50`
      const pressedBg = ThemeManager.isDark
        ? opacity(darkBg, '3d')
        : `$color.${colorScheme}.100`
      return {
        computedViewStyle: {
          backgroundColor: '$color.bg.layout',
          ...styles(
            [
              hovered,
              {
                backgroundColor: hoveredBg,
              },
            ],
            [
              pressed,
              {
                backgroundColor: pressedBg,
              },
            ],
            [
              variant === 'outline',
              { borderStyle: 'solid', borderWidth: 1, borderColor: color },
            ]
          ),
        },
        computedTextStyle: {
          color,
        },
      }
    }
    case 'link': {
      const pressedColor = `$color.${colorScheme}.${colorBase + 200}`
      return {
        computedViewStyle: {},
        computedTextStyle: {
          color,
          ...styles(
            [
              hovered || pressed,
              {
                textDecorationLine: 'underline',
                textDecorationStyle: 'solid',
                textDecorationColor: color,
              },
            ],
            [
              pressed,
              {
                color: pressedColor,
                textDecorationColor: pressedColor,
              },
            ]
          ),
        },
      }
    }
  }
}

function computeStyles({ variant, status, pressed, hovered }: any): any {
  if (status === 'disabled') {
    return {
      computedViewStyle: {
        cursor: 'not-allowed',
        opacity: `$opacity.disabled`,
        backgroundColor: '$color.bg.disabled',
      },
    }
  }
  if (status === 'normal') {
    return computeNormalStyle({ variant, pressed, hovered })
  }
  return computeColoredStyle({ variant, status, pressed, hovered })
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    value,
    ts,
    style,
    variant,
    status,
    textTs,
    onPress,
    renderLeft,
    renderRight,
    viewRef,
    isActive,
  } = props
  const disabled = status === 'disabled'
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      {({ pressed, hovered }: any) => {
        const { computedViewStyle, computedTextStyle } = computeStyles({
          variant,
          status,
          pressed: isActive || pressed,
          hovered,
        })
        const mergedTs: KV = {
          fontSize: '$fontSize.md',
          fontWeight: '$fontWeight.semibold',
          ...computedTextStyle,
          ...textTs,
        }
        const accessoryProps = {
          color: mergedTs.color,
          size: mergedTs.fontSize,
        }
        return (
          <View
            ref={viewRef}
            ts={{
              borderRadius: '$radius.md',
              alignItems: 'center',
              justifyContent: 'center',
              height: '$size.10',
              paddingHorizontal: '$space.3',
              gap: '$rem: 0.5',
              outline: 'none',
              ...computedViewStyle,
              ...ts,
            }}
            style={style}
          >
            {renderLeft && renderLeft(accessoryProps)}
            {isString(value) && <Text ts={mergedTs} value={value} />}
            {isFunction(value) && value(accessoryProps)}
            {renderRight && renderRight(accessoryProps)}
          </View>
        )
      }}
    </Pressable>
  )
}

Button.defaultProps = {
  variant: 'solid',
  status: 'normal',
}
