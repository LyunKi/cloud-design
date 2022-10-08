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

### Basic Usages

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
        error="Name is required"
      />
    </FlexLayout>
  )
}
```
