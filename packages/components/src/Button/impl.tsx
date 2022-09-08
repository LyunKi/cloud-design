import React from 'react'
import { Button as RnButton, StyleSheet } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { ButtonProps } from './api'

export const Button: ThemedComponent<ButtonProps> = withTheme((props) => {
  const { value = '' } = props
  return <RnButton title={value} />
})
