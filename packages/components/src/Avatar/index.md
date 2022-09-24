---
title: Avatar
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

React Native Avatar component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Avatar } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React from 'react'
import { FlexLayout, Avatar } from '@cloud-design/components'

export default () => (
  <FlexLayout wrap spacing={16} align="center">
    <Avatar
      size={'$fontSize.md'}
      src={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
    <Avatar size={24} />
    <Avatar
      size={'$rem:2'}
      src={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
    />
  </FlexLayout>
)
```
