import React from 'react'
import { isFunction, isString } from 'lodash'
import { View } from '../View'
import { Text } from '../Text'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { TopNavigationProps } from './api'

function getRenderGoBack(props: any) {
  return () => {
    return (
      <View style={{ position: 'absolute', left: 0, top: 0, zIndex: 1 }}>
        <Button
          variant="ghost"
          value={(accessoryProps) => (
            <Icon name="arrow-ios-back-outline" {...accessoryProps} />
          )}
          {...props}
        />
      </View>
    )
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
    computedRenderLeft = getRenderGoBack({ onPress: goBack })
  }
  const containerTs = {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$color.bg.layout',
    height: '$size.10',
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
