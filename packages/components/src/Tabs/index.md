---
title: Tabs
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

React Native Tabs component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Tabs } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React, { useState } from 'react'
import { FlexLayout, Tabs, Text, Divider } from '@cloud-design/components'

export default () => {
  const [value, setValue] = useState(0)
  return (
    <FlexLayout wrap spacing={16} align="center">
      <Tabs
        value={value}
        ts={{ width: '100%' }}
        onChange={setValue}
        items={[
          { title: 'tab 1', renderContent: () => <Text value={'content 1'} /> },
          { title: 'tab 2', renderContent: () => <Text value={'content 2'} /> },
        ]}
      />
    </FlexLayout>
  )
}
```
