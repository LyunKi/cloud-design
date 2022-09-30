import React, { forwardRef, Ref, useRef, useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { combineRefs } from '@cloud-dragon/react-utils'
import { AccessoryProps, styles, ThemeManager } from '../common'
import { FlexLayout } from '../FlexLayout'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { InputProps, SearchFormat } from './api'

function renderSearch({ onSearch }: SearchFormat, value?: string) {
  return (props: AccessoryProps) => {
    return (
      <Button
        variant="ghost"
        style={{ width: 32, height: 32, marginHorizontal: 4 }}
        onPress={() => onSearch(value)}
        value={() => {
          return <Icon {...props} name="search" />
        }}
      />
    )
  }
}

function rednerPassword(
  secureTextEntry: boolean,
  setSecureTextEntry: Function
) {
  return (props: AccessoryProps) => {
    const icon = secureTextEntry ? 'eye-outline' : 'eye-off'
    return (
      <Button
        variant="ghost"
        style={{ width: 32, height: 32, marginHorizontal: 4 }}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
        value={() => {
          return <Icon {...props} name={icon} />
        }}
      />
    )
  }
}

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
      format,
      ...rest
    } = props
    const [secureTextEntry, setSecureTextEntry] = useState(
      format?.type === 'password'
    )
    const innerRef = useRef<TextInput>()
    let computedRenderRight = renderRight
    if (!computedRenderRight) {
      if (format?.type === 'search') {
        computedRenderRight = renderSearch(
          format,
          (innerRef.current as any)?.value
        )
      }
      if (format?.type === 'password') {
        computedRenderRight = rednerPassword(
          secureTextEntry,
          setSecureTextEntry
        )
      }
    }
    const [focused, setFocused] = useState(autoFocus)
    const containerTs = StyleSheet.flatten([
      ThemeManager.themed({
        borderColor: '$color.border.input',
        borderWidth: 1,
        height: '$size.10',
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
      size: computedInputTs.fontSize,
    }
    const computedRenderLeft = renderLeft ?? renderLeft
    return (
      <FlexLayout style={containerTs}>
        {computedRenderLeft && computedRenderLeft(accessoryProps)}
        <TextInput
          autoFocus={autoFocus}
          ref={combineRefs(innerRef, ref)}
          secureTextEntry={secureTextEntry}
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
        {computedRenderRight && computedRenderRight(accessoryProps)}
      </FlexLayout>
    )
  }
)

Input.defaultProps = {}
