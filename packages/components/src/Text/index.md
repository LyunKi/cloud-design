---
title: Text
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

React Native Text 组件

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Text } from '@cloud-design/components'
```

## Usages

### Text with numberOfLines

```jsx
import React from 'react'
import { Text } from '@cloud-design/components'

export default () => (
  <Text
    numberOfLines={2}
    ts={{ width: 375 }}
    value={
      '这是多行文字，会自动在超过 2 行时折断，这是多行文字，会自动在超过 2 行时折断，这是多行文字，会自动在超过 2 行时折断'
    }
  />
)
```

### Text with size

```jsx
import React from 'react'
import { FlexLayout, Text } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ gap: 16 }} align="center">
    {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
      <Text key={size} value={'Text'} size={size} />
    ))}
  </FlexLayout>
)
```
