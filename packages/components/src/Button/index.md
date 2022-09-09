---
title: Button
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

react-native Button component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Button } from '@cloud-design/components'
```

## Useages

### Button with variant

```jsx
import React from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ gap: 16 }} align="center">
    {['solid', 'outline', 'ghost', 'link'].map((variant) => (
      <Button key={variant} value={'Button'} variant={variant} />
    ))}
  </FlexLayout>
)
```

### Button with icon

```jsx
import React from 'react'
import { FlexLayout, Button, Icon } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ gap: 16 }} align="center">
    <Button
      value={'Button'}
      renderLeft={(props) => <Icon {...props} name="star" />}
    />
    <Button renderLeft={(props) => <Icon {...props} name="star" />} />
    <Button renderRight={(props) => <Icon {...props} name="star" />} />
    <Button
      value={'Button'}
      renderRight={(props) => <Icon {...props} name="star" />}
    />
  </FlexLayout>
)
```

### Button with status

```jsx
import React from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout style={{ gap: 16 }} align="center">
    {[
      'primary',
      'disabled',
      'secondary',
      'info',
      'success',
      'warning',
      'error',
    ].map((status) => (
      <Button key={status} value={'Button'} status={status} />
    ))}
  </FlexLayout>
)
```

test

```jsx
import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { FlexLayout, Button } from '@cloud-design/components'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Modal>
      <Button value={'Button'} />
    </Modal>
  )
}

export default App
```
