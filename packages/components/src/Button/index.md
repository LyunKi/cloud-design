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

```jsx
import React from 'react'
import { Text } from '@cloud-design/components'

export default () => (
  <Text
    numberOfLines={2}
    value={
      '这是默认的字体，会自动在超过 2 行时折断，这是默认的字体，会自动在超过 2 行时折断'
    }
  />
)
```
