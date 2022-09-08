---
title: Button
nav:
  title: Components
  path: /components
group:
  title: A
  path: /
  order: 1
toc: menu
---

# `@cloud-design/components`

react-native Button 组件

## 安装

```sh
$ npm install @cloud-design/components
```

## 引入

```js
import { Button } from '@cloud-design/components'
```

## 用例

### 预置 形态

```jsx
import React from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ width: 375 }} align="center" justify="space-between">
    {['solid', 'outline', 'ghost', 'link'].map((variant) => (
      <Button key={variant} value={'Button'} variant={variant} />
    ))}
  </FlexLayout>
)
```
