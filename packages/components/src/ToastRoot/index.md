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
import { PortalHost } from '@gorhom/portal'
import {
  FlexLayout,
  ToastRoot,
  Toast,
  Button,
  TOAST_HOST,
} from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout direction="column" spacing={16} style={{ width: 200 }}>
      <PortalHost name={TOAST_HOST} />
      <ToastRoot host={TOAST_HOST} ref={Toast.init} />
      <Button
        value="simple info"
        status="info"
        onPress={() =>
          Toast.info({
            description: 'description',
          })
        }
      />
      <Button
        value="info"
        status="info"
        onPress={() =>
          Toast.info({ title: 'title', description: 'description' })
        }
      />
      <Button
        value="warning"
        status="warning"
        onPress={() =>
          Toast.warning({ title: 'title', description: 'description' })
        }
      />
      <Button
        value="error"
        status="error"
        onPress={() =>
          Toast.error({ title: 'title', description: 'description' })
        }
      />
      <Button
        value="success"
        status="success"
        onPress={() =>
          Toast.success({ title: 'title', description: 'description' })
        }
      />
      <Button
        value="loading"
        onPress={() =>
          Toast.loading({ title: 'title', description: 'description' })
        }
      />
    </FlexLayout>
  )
}
```
