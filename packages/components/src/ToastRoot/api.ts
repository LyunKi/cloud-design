import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'

export interface ToastRootProps {
  maxCount?: number
}

export interface ToastItemProps {
  id: string
  status?: 'success' | 'loading' | 'error' | 'warning' | 'info'
  title?: string
  description: string
  closeable?: boolean
  render?: Fn<any, ReactNode>
}

export interface ToastOptions extends ToastItemProps {
  duration?: number
}

export interface ToastInstance {
  toast: Fn<[ToastOptions]>
  cleanToasts: Fn
}
