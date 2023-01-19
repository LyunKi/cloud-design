import React, { ReactNode, useMemo } from 'react'
import { isString } from 'lodash'
import { View } from '../View'
import { Button } from '../Button'
import { styles } from '../common'
import { TabsProps } from './api'

export const Tabs: React.FC<TabsProps> = (props) => {
  const { ts, contentTs, titleTs, value, onChange, items, separator } = props
  const itemNodes = useMemo(() => {
    const titleItems: ReactNode[] = []
    let contentItem: ReactNode
    items.forEach((item, index) => {
      const { title, id = index, renderContent } = item
      const isSelected = value === id
      const onItemChange = () => onChange?.(id)
      titleItems.push(
        isString(title) ? (
          <Button
            ts={{
              borderRadius: 0,
              ...styles([
                isSelected,
                {
                  borderBottomWidth: 2,
                  borderBottomStyle: 'solid',
                  borderColor: '$color.status.primary',
                },
              ]),
            }}
            status={isSelected ? 'primary' : 'normal'}
            variant="ghost"
            onPress={onItemChange}
            value={title}
          />
        ) : (
          title({ onItemChange, id, isSelected })
        )
      )
      if (separator && index !== items.length - 1) {
        titleItems.push(separator)
      }

      if (isSelected) {
        contentItem = renderContent({ onItemChange, id, isSelected })
      }
    })
    return { titleItems, contentItem }
  }, [items, onChange, value, separator])
  return (
    <View ts={{ flexDirection: 'column', ...ts }}>
      <View
        ts={{
          width: '100%',
          borderBottomWidth: 2,
          borderBottomStyle: 'solid',
          borderColor: '$color.border.default',
          height: '$size.10',
          ...titleTs,
        }}
      >
        {itemNodes.titleItems}
      </View>
      <View
        ts={{
          paddingVertical: '$space.4',
          paddingHorizontal: '$space.4',
          ...contentTs,
        }}
      >
        {itemNodes.contentItem}
      </View>
    </View>
  )
}
