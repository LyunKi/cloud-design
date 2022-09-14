import React, { PropsWithChildren, useRef, useState } from 'react'
import { Modal } from 'react-native'
import { View } from '../View'
import { OverlayProps } from './api'

export const Overlay = (props: PropsWithChildren<OverlayProps>) => {
  const {
    renderTrigger,
    maskTs,
    contentTs,
    getContentPosition,
    children,
    hideMask,
  } = props
  const [visible, setVisible] = useState(false)
  const triggerRef: any = useRef()
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  })
  const toggle = () => {
    if (!visible && getContentPosition) {
      //@ts-ignore
      triggerRef.current?.measure((_x, _y, width, height, px, py) => {
        setPosition(getContentPosition({ left: px, top: py, width, height }))
      })
    }
    setVisible((prev) => !prev)
  }
  const ModalContent = (
    <View
      ts={{
        position: 'absolute',
        ...contentTs,
        ...position,
      }}
    >
      {children}
    </View>
  )
  return (
    <>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={toggle}
      >
        {!hideMask ? (
          <View
            onPress={toggle}
            ts={{
              width: '$vw:100',
              height: '$vh:100',
              ...maskTs,
            }}
          >
            {ModalContent}
          </View>
        ) : (
          ModalContent
        )}
      </Modal>
      {renderTrigger({ viewRef: triggerRef, onPress: toggle })}
    </>
  )
}
