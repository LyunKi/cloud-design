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

## Useages

```jsx
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
    <ConfigProvider>
      <FlexLayout>
        <Overlay
          renderTrigger={(props) => <Button {...props} value={'Trigger'} />}
          getContentPosition={(triggerRect) => {
            return {
              left: triggerRect.left,
              top: triggerRect.top + triggerRect.height + 4 + window.scrollY,
            }
          }}
        >
          <Text value={'Overlay content'} />
        </Overlay>
      </FlexLayout>
    </ConfigProvider>
  )
}
```
