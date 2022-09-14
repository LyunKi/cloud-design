import React, { PropsWithChildren } from 'react'
import { Overlay } from '../Overlay'
import { MenuProps } from './api'

interface MenuContentProps {}

export const MenuContent = (props: PropsWithChildren<MenuContentProps>) => {}

export const Menu = (props: MenuProps) => {
  const { renderTrigger, renderContent } = props
  return (
    <Overlay
      renderTrigger={renderTrigger}
      getContentPosition={(triggerRect) => {
        return {
          left: triggerRect.x,
          top: triggerRect.y + triggerRect.height + 8,
        }
      }}
      renderContent={renderContent}
    />
  )
}
