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
