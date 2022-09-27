import React, { forwardRef, Ref, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { styles, ThemeManager } from '../common'
import { FlexLayout } from '../FlexLayout'
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
      inputTs,
      renderLeft,
      renderRight,
      ...rest
    } = props
    const [focused, setFocused] = useState(autoFocus)
    const containerTs = StyleSheet.flatten([
      ThemeManager.themed({
        borderColor: '$color.border.input',
        borderWidth: 1,
        height: '$rem:2.5',
        borderRadius: '$radius.md',
        alignItems: 'center',
        width: '100%',
        ...styles([
          focused,
          {
            borderColor: '$color.blue.500',
            borderWidth: 2,
          },
        ]),
        ...ts,
      }),
      style,
    ])
    const computedInputTs = ThemeManager.themed({
      paddingLeft: renderLeft ? undefined : '$rem:1',
      paddingRight: renderRight ? undefined : '$rem:1',
      lineHeight: '$rem:1.5',
      outline: 'none',
      fontSize: '$fontSize.default',
      color: '$color.font.default',
      flex: 1,
      ...inputTs,
    })
    const accessoryProps = {
      color: containerTs.borderColor,
      size: containerTs.height,
    }
    return (
      <FlexLayout style={containerTs}>
        {renderLeft && renderLeft(accessoryProps)}
        <TextInput
          autoFocus={autoFocus}
          ref={ref}
          onFocus={(e) => {
            setFocused(true)
            onFocus?.(e)
          }}
          value={value}
          onBlur={(e) => {
            setFocused(false)
            onBlur?.(e)
          }}
          placeholder={placeholder}
          placeholderTextColor={ThemeManager.themedValue(
            '$color.placeholder.default'
          )}
          style={computedInputTs}
          {...rest}
        />
        {renderRight && renderRight(accessoryProps)}
      </FlexLayout>
    )
  }
)

Input.defaultProps = {}
