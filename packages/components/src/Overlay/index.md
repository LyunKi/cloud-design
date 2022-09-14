---
title: Overlay
nav:
  title: Components
  path: /components
group:
  title: Components
  path: /
  order: 2
toc: menu
---

# `@cloud-design/components`

react-native Overlay component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Overlay } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
/**
 * iframe: true
 */
import React from 'react'
import {
  FlexLayout,
  View,
  Button,
  Text,
  Overlay,
  ConfigProvider,
} from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout>
      <Overlay
        renderTrigger={(props) => <Button {...props} value={'Trigger'} />}
        renderContent={() => <Text value={'Overlay content'} />}
        getContentPosition={(triggerRect) => {
          return {
            left: triggerRect.x,
            top: triggerRect.y + triggerRect.height,
          }
        }}
      />
    </FlexLayout>
  )
}
```
