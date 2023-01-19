import React, { useRef, useState } from 'react'
import { Modal } from 'react-native'
import { View } from '../View'
import { OverlayProps } from './api'

export const Overlay = (props: OverlayProps) => {
  const {
    renderTrigger,
    mask,
    contentContainerTs,
    getContentPosition,
    renderContent,
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
      triggerRef.current?.measure((x, y, width, height, pageX, pageY) => {
        setPosition(getContentPosition({ x, y, width, height, pageX, pageY }))
      })
    }
    setVisible((prev) => !prev)
  }
  const ModalContent = (
    <View
      ts={{
        position: 'absolute',
        ...position,
        ...contentContainerTs,
      }}
    >
      {renderContent({ onPress: toggle })}
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
        <View
          onPress={mask?.disableCloseOnPress ? undefined : toggle}
          ts={{
            backgroundColor: 'transparent',
            width: '$vw:100',
            height: '$vh:100',
            ...mask?.ts,
          }}
        >
          {ModalContent}
        </View>
      </Modal>
      {renderTrigger?.({
        viewRef: triggerRef,
        onPress: toggle,
        isActive: !!visible,
      })}
    </>
  )
}
