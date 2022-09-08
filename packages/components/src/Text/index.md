---
title: Text
nav:
  title: Components
  path: /components
group:
  title: Text
  path: /
  order: 2
toc: menu
---

# `@cloud-design/components`

react-native Text 组件

## 安装

```sh
$ npm install @cloud-design/components
```

## 引入

```js
import { Text } from '@cloud-design/components'
```

## 用例

### 多行截断

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

### 预置 Size

```jsx
import React from 'react'
import { FlexLayout, Text } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} align="center" justify="space-between">
    {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
      <Text key={size} value={'Text'} numberOfLines={2} size={size} />
    ))}
  </FlexLayout>
)
```
