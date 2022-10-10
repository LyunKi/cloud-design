import { isEmpty, take, uniqueId } from 'lodash'
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react'
import { Portal } from '@gorhom/portal'
import { View } from '../View'
import { Text } from '../Text'
import { TOAST_HOST } from '../common/constants'
import { styles } from '../common'
import {
  ToastInstance,
  ToastItemProps,
  ToastOptions,
  ToastRootProps,
} from './api'

const ToastItem = (props: ToastItemProps) => {
  return (
    <View>
      <Text value={props.id} />
    </View>
  )
}

class ToastClass {
  private instance?: ToastInstance

  public init = (ref: ToastInstance) => {
    this.instance = ref
  }

  public info(options: ToastOptions) {
    this.instance?.toast({
      ...options,
      status: 'info',
    })
  }

  public closeAll() {
    this.instance?.cleanToasts()
  }
}

export const Toast = new ToastClass()

export const ToastRoot: React.FC<ToastRootProps> = forwardRef((props, ref) => {
  const { maxCount = 3 } = props
  const [items, setItems] = useState<ToastItemProps[]>([])
  const visible = !isEmpty(items)
  const cleanToasts = useCallback((id?: string) => {
    if (id) {
      setItems((prev) => prev.filter((item) => item.id !== id))
    }
    setItems([])
  }, [])
  useImperativeHandle(
    ref,
    () => {
      return {
        toast(options: ToastOptions) {
          const { id, duration = 3, ...rest } = options
          const itemId = id ?? uniqueId('__toast-item-')
          setItems((prev) => take([{ ...rest, id: itemId }, ...prev], maxCount))
          return id
        },
        update(options: ToastOptions) {
          const itemIndex = items.findIndex((item) => item.id === options.id)
          const item = items[itemIndex]
          items.splice(itemIndex, 1, { ...item, ...options })
        },
        cleanToasts,
      }
    },
    [items, cleanToasts, maxCount]
  )
  return (
    <Portal hostName={TOAST_HOST}>
      <View
        ts={{ zIndex: '$zIndex.toast' }}
        style={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'none',
          position: 'fixed',
          ...styles([
            visible,
            {
              display: 'flex',
            },
          ]),
        }}
      >
        {items.map((item) => (
          <ToastItem key={item.id} {...item} />
        ))}
      </View>
    </Portal>
  )
})
