import { KV } from '@cloud-dragon/common-types'
import { reduce } from 'lodash'

export type ConditionStyle = [boolean | undefined, KV]

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

/**
 * 将 hex color 转换为 rgba color
 *
 * @param hex
 * @param opacity
 * @returns
 */
function hexToRgba(hex: string, opacity: number = 1) {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    throw new Error('Bad Hex')
  }
  let hexArray = hex.substring(1).split('')
  if (hexArray.length === 3) {
    hexArray = [
      hexArray[0],
      hexArray[0],
      hexArray[1],
      hexArray[1],
      hexArray[2],
      hexArray[2],
    ]
  }
  const bigint: any = '0x' + hexArray.join('')
  return `rgba(${[(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255].join(
    ','
  )},${opacity})`
}

/**
 * 为颜色增加 opacity 值，只支持 hex 和 rgb 颜色，并统一返回 rgba
 *
 * @param color
 * @param percentage
 * @returns
 */
export function opacity(color: string, percentage: number) {
  const rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
  if (rgb) {
    return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${percentage})`
  }
  const hex = /^#([A-Fa-f0-9]{3}){1,2}$/.test(color)
  if (hex) {
    return hexToRgba(color, percentage)
  }
  return color
}
