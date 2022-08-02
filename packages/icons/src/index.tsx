import React from 'react'
import OutlineIcon from '../generated/outline'

export * from '../generated/outline'

export interface IconProps {
  name: string
  size?: number
  color?: string | string[]
}

export default function Icon(props: IconProps) {
  const { name, ...rest } = props
  const finalName = `${name}-outline` as any
  return <OutlineIcon name={finalName} {...rest} />
}
