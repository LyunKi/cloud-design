import { Fn } from '@cloud-dragon/common-types'
import { ReactNode } from 'react'

export interface ToastItem {
  id: string
  status?: 'success' | 'loading' | 'error' | 'warning' | 'info'
  title?: string
  description: string
  closeable?: boolean
  duration?: number
  render?: Fn<any, ReactNode>
}
