import React, { forwardRef } from 'react'
import { Pressable } from 'react-native'
import { KV } from '@cloud-dragon/common-types'
import { ThemeComponent, ThemeManager, withTheme } from '../common/theme'
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

function computeStyles({ variant, status, pressed, hovered }: any): any {
  console.log('hovered', hovered)
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
        backgroundColor: 'transparent',
        ...styles(
          [
            hovered,
            {
              backgroundColor: '$color.bg.secondary.hovered',
            },
          ],
          [
            pressed,
            {
              backgroundColor: '$color.bg.secondary.pressed',
            },
          ]
        ),
        borderColor: `$color.border.default`,
        borderWidth: 1,
        borderStyle: 'solid',
      },
    }
  }
  const colorScheme = getColorSchemeByStatus(status)
  const colorBase = ThemeManager.isDark ? 200 : 500
  const color = `$color.${colorScheme}.${colorBase}`
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
          color: '$color.font.reverse',
        },
      }
    }
    case 'outline':
    case 'ghost': {
      const darkBg = ThemeManager.handleThemeStyleValue(
        `$color.${colorScheme}.200`
      )
      const hoveredBg = ThemeManager.isDark
        ? opacity(darkBg, '1f')
        : `$color.${colorScheme}.50`
      const pressedBg = ThemeManager.isDark
        ? opacity(darkBg, '3d')
        : `$color.${colorScheme}.100`
      console.log('hoveredBg', hoveredBg, pressedBg)
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
        {({ pressed, hovered }) => {
          const { computedViewStyle, computedTextStyle } = computeStyles({
            variant,
            status,
            pressed,
            hovered,
          })
          console.log('computeStyles', computedViewStyle, computedTextStyle)
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
