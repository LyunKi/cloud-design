import React from 'react'
import { Pressable } from 'react-native'
import { ThemedComponent, withTheme } from '../ConfigProvider'
import { View } from '../View'
import { Text } from '../Text'
import { ButtonProps } from './api'

// function useComputedStyles({ variant, textTs, colorScheme }) {
//   return {
//     computedBgColor: 'white',
//   }
// }

export const Button: ThemedComponent<ButtonProps> = withTheme((props) => {
  const {
    value = '',
    size = 'md',
    textTs,
    variant = 'solid',
    colorScheme = 'brand',
  } = props
  // const { computedBgColor } = useComputedStyles({
  //   variant,
  //   textTs,
  //   colorScheme,
  // })
  return (
    <Pressable>
      <View
        ts={{
          borderRadius: '$radius.md',
          alignItems: 'center',
          justifyContent: 'center',
          height: '$size.10',
          // backgroundColor: computedBgColor,
        }}
      >
        <Text ts={textTs} value={value} />
      </View>
    </Pressable>
  )
})
