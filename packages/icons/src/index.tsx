import React from 'react'
import { findIconByName } from './generated'

export interface IconProps {
  name: string
  size?: number
  color?: string
}

export default function Icon(props: IconProps) {
  const { name, size = 24, color } = props
  const Icon = findIconByName(name)!
  return React.createElement(Icon, {
    width: size,
    height: size,
    fill: color,
  })
}
