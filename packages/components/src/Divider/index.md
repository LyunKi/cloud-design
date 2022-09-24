---
title: Divider
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

React Native Divider component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Divider } from '@cloud-design/components'
```

## API

<API hideTitle src="./impl.tsx"></API>

## Usages

### Divider with orientation

```jsx
import React from 'react'
import { Divider, FlexLayout, Text } from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout align="center" spacing={16} ts={{ height: 100 }}>
      <Text value={'left'} />
      <Divider orientation="vertical" padding={4} />
      <Text value={'right'} />
    </FlexLayout>
  )
}
```

### Divider with color

```jsx
import React from 'react'
import { Divider, FlexLayout, Text } from '@cloud-design/components'

export default () => {
  return (
    <FlexLayout
      direction="column"
      align="center"
      spacing={16}
      ts={{ width: 100 }}
    >
      <Text value={'top'} />
      <Divider padding={4} color={'$color.brand.200'} />
      <Text value={'bottom'} />
    </FlexLayout>
  )
}
```
