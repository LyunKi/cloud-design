import React, { forwardRef, Ref, useState } from 'react'
import { TextInput } from 'react-native'
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
      ...rest
    } = props
    const [focused, setFocused] = useState(autoFocus)
    return (
      <FlexLayout
        ts={{
          borderColor: '$color.border.input',
          borderWidth: 1,
          height: '$rem:2.5',
          borderRadius: '$radius.md',
          width: '100%',
          ...styles([
            focused,
            {
              borderColor: '$color.blue.500',
              borderWidth: 2,
            },
          ]),
          ...ts,
        }}
      >
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
          placeholderTextColor={ThemeManager.themedValue(
            '$color.placeholder.default'
          )}
          style={ThemeManager.themed({
            paddingHorizontal: '$rem:1',
            lineHeight: '$rem:1.5',
            outline: 'none',
            flex: 1,
            ...inputTs,
          })}
          {...rest}
        />
      </FlexLayout>
    )
  }
)

Input.defaultProps = {}
