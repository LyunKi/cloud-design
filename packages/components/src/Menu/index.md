---
title: Menu
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

react-native Menu component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Menu } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React from 'react'
import {
  FlexLayout,
  View,
  Button,
  Text,
  Menu,
  ConfigProvider,
  MenuContent,
  MenuItem,
} from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout>
      <Menu
        renderTrigger={(props) => <Button {...props} value={'MenuTrigger'} />}
        renderContent={() => (
          <MenuContent>
            <MenuItem value={'Menu Item 1'} />
            <MenuItem value={'Menu Item 2'} />
          </MenuContent>
        )}
      />
    </FlexLayout>
  )
}
```
