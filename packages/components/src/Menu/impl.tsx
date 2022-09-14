import React, { PropsWithChildren } from 'react'
import { Overlay } from '../Overlay'
import { MenuProps } from './api'

export const Menu = (props: PropsWithChildren<MenuProps>) => {
  const { renderTrigger, children } = props
  return (
    <Overlay
      renderTrigger={renderTrigger}
      getContentPosition={(triggerRect) => {
        return {
          left: triggerRect.x,
          top: triggerRect.y + triggerRect.height + 8,
        }
      }}
    >
      {children}
    </Overlay>
  )
}
