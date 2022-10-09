import React, { useMemo } from 'react'
import get from 'lodash/get'
import { View } from '../View'
import { Text } from '../Text'
import { styles } from '../common'
import { FormConfig, FormFieldProps } from './api'

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

function useFieldProps(name: string, formConfig: FormConfig = {}) {
  return useMemo(() => {
    const { errors, values, handleChange } = formConfig
    const error = get(errors, name)
    return {
      error,
      value: get(values, name),
      onChange: handleChange?.(name),
      name,
    }
  }, [name, formConfig])
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const { label, renderField, name, tip, isRequired, formConfig, ts, style } =
    props
  const containerTs = { flexDirection: 'column', width: '100%', ...ts }
  const fieldProps = useFieldProps(name, formConfig)
  const error = fieldProps.error
  return (
    <View style={style} ts={containerTs}>
      {label && renderLabel({ label, isRequired })}
      {renderField(fieldProps)}
      {(error || tip) && renderTip({ tip, error })}
    </View>
  )
}
