---
title: TopNavigation
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

React Native TopNavigation component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { TopNavigation } from '@cloud-design/components'
```

## Usages

### Basic usage

```jsx
import React from 'react'
import { FlexLayout, TopNavigation } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ width: 375 }}>
    <TopNavigation
      style={{ width: '100%' }}
      goBack={() => {
        console.log('go back')
      }}
      title={'Title'}
    />
  </FlexLayout>
)
```
