---
title: ToastRoot
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

React Native ToastRoot component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { ToastRoot } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React from 'react'
import { FlexLayout, ToastRoot, Toast, Button } from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout direction="column" style={{ width: 375 }}>
      <ToastRoot ref={Toast.init} />
      <Button value="Toast" onPress={() => Toast.info({ title: 'title' })} />
    </FlexLayout>
  )
}
```
