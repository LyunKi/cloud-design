import React from 'react'
import { isFunction, isString } from 'lodash'
import { View } from '../View'
import { Text } from '../Text'
import { Button } from '../Button'
import { TopNavigationProps } from './api'

function renderGoBack(props: any) {
  return () => {
    return <Button />
  }
}

export const TopNavigation: React.FC<TopNavigationProps> = (props) => {
  const { title, ts, style, goBack, renderLeft, renderRight } = props
  const textTs = {
    fontSize: '$fontSize.xl',
    fontWeight: '$fontWeight.bold',
  }
  let computedRenderLeft = renderLeft
  if (!computedRenderLeft && goBack) {
    computedRenderLeft = renderGoBack({ onPress: goBack })
  }
  const containerTs = {
    alignItems: 'center',
    backgroundColor: '$color.bg.layout',
    ...ts,
  }
  return (
    <View style={style} ts={containerTs}>
      {computedRenderLeft && computedRenderLeft()}
      {isString(title) && <Text ts={textTs} value={title} />}
      {isFunction(title) && title({ textTs })}
      {renderRight && renderRight()}
    </View>
  )
}
