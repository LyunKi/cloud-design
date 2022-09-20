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
          left: triggerRect.pageX,
          top: triggerRect.pageY + triggerRect.height + 8 + window.scrollY,
        }
      }}
      renderContent={renderContent}
    />
  )
}
