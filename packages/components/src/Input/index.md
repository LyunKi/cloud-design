---
title: Input
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

React Native Input component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Input } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React from 'react'
import { FlexLayout, Input } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} wrap spacing={16} align="center">
    <Input placeholder="Basic Usage" />
  </FlexLayout>
)
```
