import React from 'react'
import { View } from '../View'
import { Text } from '../Text'
import { styles } from '../common'
import { FormFieldProps } from './api'

function renderLabel({ label, isRequired }: any) {
  const basicTextTs = {
    fontWeight: '$fontWeight.semibold',
  }
  return (
    <View ts={{ marginBottom: '$space.2' }}>
      <Text ts={basicTextTs} value={label}></Text>
      {isRequired && (
        <Text
          ts={{
            ...basicTextTs,
            marginLeft: '$space.1',
            color: '$color.status.error',
          }}
          value="*"
        ></Text>
      )}
    </View>
  )
}

function renderTip({ tip, error }: any) {
  const text = error || tip
  const basicTextTs = {
    fontSize: '$fontSize.sm',
    ...styles([
      !!error,
      {
        color: '$color.status.error',
      },
    ]),
  }
  return (
    <View ts={{ marginTop: '$space.2' }}>
      <Text ts={basicTextTs} value={text}></Text>
    </View>
  )
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, renderField, tip, isRequired, error, ts, style } = props
  const containerTs = { flexDirection: 'column', width: '100%', ...ts }
  return (
    <View style={style} ts={containerTs}>
      {label && renderLabel({ label, isRequired })}
      {renderField({
        error: !!error,
      })}
      {(error || tip) && renderTip({ tip, error })}
    </View>
  )
}
