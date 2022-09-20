import { KV } from '@cloud-dragon/common-types'
import { reduce } from 'lodash'

export type ConditionStyle = [boolean, KV]

export function styles(...conditionStyles: ConditionStyle[]) {
  return reduce(
    conditionStyles,
    (record, value) => {
      const [condition, style] = value
      if (condition) {
        Object.assign(record, style)
      }
      return record
    },
    {}
  )
}

export function opacity(color: string, percentage: string) {
  const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (rgb) {
    return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${percentage})`
  }
  const hex = color.match(/^#\b[0-9A-F]{6}\b$/i)
  if (hex) {
    return `${hex[0]}${percentage}`
  }
  return color
}
