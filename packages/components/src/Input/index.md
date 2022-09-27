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

### Input with Icons

```jsx
import React from 'react'
import { FlexLayout, Input, Icon, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout ts={{ width: 375 }} wrap spacing={16} align="center">
    <Input
      placeholder="Input with Icons"
      renderLeft={(props) => (
        <Button
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
          renderLeft={() => {
            return <Icon {...props} name="smartphone-outline" />
          }}
        />
      )}
    />
    <Input
      placeholder="Input with Icons"
      renderRight={(props) => (
        <Button
          variant="ghost"
          style={{ backgroundColor: 'transparent' }}
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
      placeholder="Search Input"
      format={{
        type: 'search',
        onSearch: (v) => {
          console.log('search', v)
        },
      }}
    />
  </FlexLayout>
)
```
