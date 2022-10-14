---
title: CountryPicker
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

React Native CountryPicker component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { CountryPicker } from '@cloud-design/components'
```

## Usages

### Basic Usage

```jsx
import React from 'react'
import { FlexLayout, CountryPicker } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ width: 375 }}>
    <CountryPicker value="CN" keyProp="callingCode" />
  </FlexLayout>
)
```
