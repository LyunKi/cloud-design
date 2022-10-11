import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'
import { Status } from '../common'

export type ToastRootProps = {
  maxCount?: number
  host: string
  ref: any
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
}

export interface ToastOptions
  extends Omit<ToastItemProps, 'id' | 'duration' | 'status' | 'onClose'> {
  id?: string
  duration?: number
  status?: ToastStatus
}

export interface ToastInstance {
  getItems: Fn<any, ToastItemProps[]>
  getMaxCount: Fn<any, number>
  setItems: Fn
}
