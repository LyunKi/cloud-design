import React from 'react'
import { View } from '../View'
import { TabsProps } from './api'

export const Tabs: React.FC<TabsProps> = (props) => {
  const { ts, contentTs, titleTs, value, onChange } = props
  return (
    <View ts={ts}>
      <View ts={titleTs}></View>
      <View ts={contentTs}></View>
    </View>
  )
}
