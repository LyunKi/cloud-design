import React, { forwardRef, Ref, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { styles, ThemeManager } from '../common'
import { InputProps } from './api'

export const Input: React.FC<InputProps> = forwardRef(
  (props, ref: Ref<TextInput>) => {
    const {
      ts,
      style,
      placeholder,
      value,
      onBlur,
      onFocus,
      autoFocus,
      ...rest
    } = props
    const [focused, setFocused] = useState(autoFocus)
    const themedStyle = ThemeManager.themed({
      borderColor: '$color.border.input',
      borderWidth: 1,
      paddingHorizontal: '$rem:1',
      height: '$rem:2.5',
      lineHeight: '$rem:1.5',
      borderRadius: '$radius.md',
      outline: 'none',
      width: '100%',
      ...styles(
        [
          !value,
          {
            color: '$color.',
          },
        ],
        [
          focused,
          {
            borderColor: '$color.blue.500',
          },
        ]
      ),
      ...ts,
    })
    return (
      <TextInput
        autoFocus={autoFocus}
        ref={ref}
        onFocus={(e) => {
          setFocused(true)
          onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          onBlur?.(e)
        }}
        placeholder={placeholder}
        placeholderTextColor={ThemeManager.handleThemeStyleValue(
          '$color.placeholder.default'
        )}
        style={StyleSheet.flatten([themedStyle, style])}
        {...rest}
      />
    )
  }
)

Input.defaultProps = {}
