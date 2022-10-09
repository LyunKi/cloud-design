import { isEmpty } from 'lodash'
import React, { forwardRef, useCallback, useState } from 'react'
import { Modal } from 'react-native'
import { ToastItem } from './api'

export const ToastRoot = forwardRef((_props, ref) => {
  const [items, setItems] = useState<ToastItem[]>([])
  const visible = !isEmpty(items)
  const cleanToasts = useCallback((id?: string) => {
    if (id) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
    setItems([])
  }, [])
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => cleanToasts()}
    ></Modal>
  )
})
