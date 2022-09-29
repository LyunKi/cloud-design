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

### Basic usage

```jsx
import React from 'react'
import { FlexLayout, Input } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} wrap spacing={16} align="center">
    <Input placeholder="Basic usage" />
  </FlexLayout>
)
```

### Input with icons

```jsx
import React from 'react'
import { FlexLayout, Input, Icon, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} wrap spacing={16} align="center">
    <Input
      placeholder="Input with icons"
      renderLeft={(props) => (
        <Button
          variant="ghost"
          style={{ width: 32, height: 32, marginHorizontal: 4 }}
          renderLeft={() => {
            return <Icon {...props} name="smartphone-outline" />
          }}
        />
      )}
    />
    <Input
      placeholder="Input with icons"
      renderRight={(props) => (
        <Button
          variant="ghost"
          style={{ width: 32, height: 32, marginHorizontal: 4 }}
          renderLeft={() => {
            return <Icon {...props} name="eye-outline" />
          }}
        />
      )}
    />
  </FlexLayout>
)
```

### Input with preset formats

```jsx
import React from 'react'
import { FlexLayout, Input, Icon } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} wrap spacing={16} align="center">
    <Input
      placeholder="Search input"
      format={{
        type: 'search',
        onSearch: (v) => {
          console.log('search', v)
        },
      }}
    />
    <Input
      placeholder="Password input"
      format={{
        type: 'password',
      }}
    />
  </FlexLayout>
)
```
