import React, { PropsWithChildren } from 'react'
import { Button } from '../Button'
import { Overlay } from '../Overlay'
import { View } from '../View'
import { MenuContentProps, MenuItemProps, MenuProps } from './api'

export const MenuContent = (props: PropsWithChildren<MenuContentProps>) => {
  const { children } = props
  return (
    <View
      ts={{
        flexDirection: 'column',
        borderRadius: '$radius.md',
        backgroundColor: '$color.bg.layout',
        paddingVertical: '$spacing.2',
        borderWidth: 1,
        borderColor: '$color.border.default',
        minWidth: '$size.3xs',
      }}
    >
      {children}
    </View>
  )
}

export const MenuItem = (props: MenuItemProps) => {
  const { ts, ...other } = props
  return (
    <Button
      ts={{ justifyContent: 'flex-start', borderRadius: 0, ...ts }}
      variant="ghost"
      {...other}
    />
  )
}

export const Menu = (props: MenuProps) => {
  const { renderTrigger, renderContent } = props
  return (
    <Overlay
      renderTrigger={renderTrigger}
      getContentPosition={(triggerRect) => {
        return {
          left: triggerRect.pageX,
          top: triggerRect.pageY + triggerRect.height + 8 + window.scrollY,
        }
      }}
      renderContent={renderContent}
    />
  )
}
