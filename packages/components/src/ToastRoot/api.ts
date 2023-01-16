import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'
import { MaskProps, Status, ThemedStyle } from '../common'

export type ToastRootProps = {
  maxCount?: number
  host: string
  ref: any
  closeable?:boolean
  mask?: MaskProps
  itemTs?:ThemedStyle
}

export type ToastStatus = Status | 'loading'

export interface ToastItemProps {
  id: string
  status: ToastStatus
  title?: string
  description: string
  closeable?: boolean
  render?: Fn<any, ReactNode>
  // use -1 to represent no limit
  duration: number
  onClose: Fn
  ts?:ThemedStyle
}

export interface ToastOptions
  extends Omit<ToastItemProps, 'id' | 'duration' | 'status' | 'onClose'> {
  id?: string
  duration?: number
  status?: ToastStatus
  ts?:ThemedStyle
}

export interface ToastInstance {
  getItems: Fn<any, ToastItemProps[]>
  getMaxCount: Fn<any, number>
  setItems: Fn
}
