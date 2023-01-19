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
import React, { useState } from 'react'
import {
  FlexLayout,
  CountryPicker,
  TopNavigation,
} from '@cloud-design/components'

export default () => {
  const [code, setContryCode] = useState('CN')
  return (
    <FlexLayout style={{ width: 375 }}>
      <CountryPicker
        title={<TopNavigation title="Country Picker" />}
        value={code}
        onChange={(countryCode) => setContryCode(countryCode)}
        keyProp="callingCode"
      />
    </FlexLayout>
  )
}
```
