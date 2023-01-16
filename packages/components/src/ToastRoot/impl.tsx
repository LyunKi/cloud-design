import { isEmpty, take, uniqueId } from 'lodash'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { Portal } from '@gorhom/portal'
import { Scheduler, BASE_PERIOD } from '@cloud-dragon/common-utils'
import { Platform } from 'react-native'
import { View } from '../View'
import { Text } from '../Text'
import { styles } from '../common'
import { Icon } from '../Icon'
import { Button, ButtonStatus } from '../Button'
import {
  ToastInstance,
  ToastItemProps,
  ToastOptions,
  ToastRootProps,
  ToastStatus,
} from './api'

function computePropsByStatus(status: ToastStatus) {
  let backgroundColor
  let closeStatus
  let icon
  switch (status) {
    case 'success': {
      backgroundColor = `$color.status.${status}`
      closeStatus = status
      icon = 'checkmark-circle-2'
      break
    }
    case 'error': {
      backgroundColor = `$color.status.${status}`
      closeStatus = status
      icon = 'alert-circle'
      break
    }
    case 'warning': {
      backgroundColor = `$color.status.${status}`
      closeStatus = status
      icon = 'alert-circle'
      break
    }
    case 'info': {
      backgroundColor = `$color.status.${status}`
      closeStatus = status
      icon = 'info'
      break
    }
    case 'loading': {
      backgroundColor = '$color.status.info'
      closeStatus = 'info'
      icon = 'loading'
    }
  }
  const fontColor = `$color.font.reverse`
  return {
    backgroundColor,
    fontColor,
    icon,
    closeStatus,
  }
}

const ToastItem = (props: ToastItemProps) => {
  const { status, closeable, title, description, onClose, ts } = props
  const { backgroundColor, fontColor, closeStatus, icon } =
    computePropsByStatus(status!)
  return (
    <View
      style={{ width: 300, alignItems: 'flex-start' }}
      ts={{
        backgroundColor,
        borderRadius: '$radius.md',
        marginHorizontal: '$rem:0.5',
        marginVertical: '$rem:0.5',
        paddingVertical: '$space.3',
        paddingLeft: '$space.4',
        paddingRight: '$space.8',
        ...ts,
      }}
    >
      <Icon color={fontColor} size="$rem:1.5" name={icon} />
      <View ts={{ marginLeft: '$space.3', flexDirection: 'column' }}>
        {title && (
          <Text
            numberOfLines={1}
            ts={{
              color: fontColor,
              lineHeight: '$rem:1.5',
              fontWeight: '$fontWeight.semibold',
            }}
            value={title}
          />
        )}
        {description && (
          <Text
            numberOfLines={2}
            ts={{ lineHeight: '$rem:1.5', maxWidth: 200, color: fontColor }}
            value={description}
          />
        )}
      </View>
      {closeable && (
        <View
          ts={{
            position: 'absolute',
            top: '$space.1',
            right: '$space.1',
          }}
        >
          <Button
            status={closeStatus as ButtonStatus}
            onPress={onClose}
            ts={{
              width: '$size.6',
              height: '$size.6',
            }}
            value={() => (
              <Icon size={'$rem:1'} color={fontColor} name="close" />
            )}
          />
        </View>
      )}
    </View>
  )
}

const DEFAULT_DURATION = 3

export class ToastManager {
  private instance?: ToastInstance
  private scheduler?: Scheduler

  private get items() {
    return this.instance?.getItems() ?? []
  }

  public init = (ref: ToastInstance) => {
    this.instance = ref
    this.scheduler = Scheduler.newFixedInstance(100)
  }

  private toast(options: ToastOptions) {
    const { id, duration, ...rest } = options
    const items = this.instance?.getItems() ?? []
    const itemId = id ?? uniqueId('__toast-item-')
    const newItems = take(
      [
        { ...rest, id: itemId, duration },
        ...items.filter((item) => item.id !== itemId),
      ],
      this.instance?.getMaxCount()
    )

    this.instance?.setItems(newItems)
    if (duration) {
      this.scheduler?.registerTasks(
        new Scheduler.Task({
          id: id,
          onComplete: () => this.close(itemId),
          totalPeriod: (duration * 1000) / BASE_PERIOD,
        })
      )
    }
    return itemId
  }

  public info(options: ToastOptions) {
    return this.toast({
      ...options,
      status: 'info',
      duration: DEFAULT_DURATION,
    })
  }
  public success(options: ToastOptions) {
    return this.toast({
      ...options,
      status: 'success',
      duration: DEFAULT_DURATION,
    })
  }
  public error(options: ToastOptions) {
    return this.toast({
      ...options,
      status: 'error',
      duration: DEFAULT_DURATION,
    })
  }
  public warning(options: ToastOptions) {
    return this.toast({
      ...options,
      status: 'warning',
      duration: DEFAULT_DURATION,
    })
  }
  public loading(options: ToastOptions) {
    return this.toast({
      ...options,
      status: 'loading',
    })
  }

  public update(options: ToastOptions) {
    const targetId = options.id
    const items = this.instance?.getItems() ?? []
    const itemIndex = items.findIndex((item) => item.id === targetId)
    if (itemIndex === -1) {
      return
    }
    const item = items[itemIndex]
    items.splice(itemIndex, 1, { ...item, ...options })
    this.instance?.setItems([...items])
  }

  public close(id?: string) {
    let closeId = id ?? this.items[0]?.id
    if (closeId) {
      this.instance?.setItems((prev: ToastItemProps[]) =>
        prev.filter((item) => item.id !== closeId)
      )
    }
  }

  public closeAll() {
    this.instance?.setItems([])
  }

  public get isWorking() {
    return this.items.length !== 0
  }
}

export const Toast = new ToastManager()

export const ToastRoot: React.FC<ToastRootProps> = forwardRef((props, ref) => {
  const { maxCount, host, closeable, mask, itemTs } = props
  const [items, setItems] = useState<ToastItemProps[]>([])
  const visible = !isEmpty(items)
  useImperativeHandle(
    ref,
    () => {
      return {
        setItems,
        getItems() {
          return items
        },
        getMaxCount() {
          return maxCount
        },
      }
    },
    [items, maxCount]
  )
  useEffect(() => {
    if (visible && Platform.OS === 'web') {
    }
    return () => {}
  }, [visible])
  const onClose = useCallback((id?: string) => {
    if (id) {
      setItems((prev: ToastItemProps[]) =>
        prev.filter((item) => item.id !== id)
      )
      return
    }
    setItems([])
  }, [])
  return (
    <Portal hostName={host}>
      <View
        onPress={() => {
          if (!mask?.disableCloseOnPress) {
            onClose()
          }
        }}
        ts={{
          zIndex: '$zIndex.toast',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          display: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          ...styles(
            [
              visible,
              {
                display: 'flex',
              },
            ],
            [
              Platform.OS === 'web',
              {
                position: 'fixed',
              },
            ],
            [
              !!mask,
              {
                height: '$vh:100',
                background: '$color.bg.mask',
              },
            ]
          ),
          ...mask?.ts,
        }}
      >
        {items.map((item) => (
          <ToastItem
            closeable={closeable}
            key={item.id}
            ts={itemTs}
            {...item}
            onClose={onClose.bind(null, item.id)}
          />
        ))}
      </View>
    </Portal>
  )
})

ToastRoot.defaultProps = {
  maxCount: 1,
}
