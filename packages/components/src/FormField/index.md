---
title: FormField
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /
  order: 2
toc: menu
---

# @cloud-design/components

React Native FormField component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { FormField } from '@cloud-design/components'
```

## Usages

### Basic usages

```jsx
import React from 'react'
import { FlexLayout, FormField, Input } from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout style={{ width: 375 }}>
      <FormField
        name="name"
        isRequired
        label="Name"
        renderField={(props) => (
          <Input {...props} placeholder="Please input your name" />
        )}
      />
    </FlexLayout>
  )
}
```

### Usage with formik

### Basic usages

```jsx
import React from 'react'
import { Formik } from 'formik'
import { View, FlexLayout, FormField, Input } from '@cloud-design/components'
import * as Yup from 'yup'

export default () => {
  return (
    <FlexLayout style={{ width: 375 }}>
      <Formik
        enableReinitialize
        initialValues={{ name: 'Unknown' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Name should not be empty'),
        })}
      >
        {(formConfig) => {
          return (
            <View style={{ width: '100%' }}>
              <FormField
                tip="Try to remove the default name"
                name="name"
                isRequired
                label="Name"
                formConfig={formConfig}
                renderField={(props) => (
                  <Input {...props} placeholder="Please input your name" />
                )}
              />
            </View>
          )
        }}
      </Formik>
    </FlexLayout>
  )
}
```
