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

# @cloud-design/components

React Native Button component

## Install

```sh
$ npm install @cloud-design/components
```

## Import

```js
import { Button } from '@cloud-design/components'
```

## Usages

### Button with variant

```jsx
import React from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout wrap spacing={16} align="center">
    {['solid', 'outline', 'ghost', 'link'].map((variant) => (
      <Button
        status="primary"
        key={variant}
        value={'Button'}
        variant={variant}
      />
    ))}
  </FlexLayout>
)
```

### Button with icon

```jsx
import React from 'react'
import { FlexLayout, Button, Icon } from '@cloud-design/components'

export default () => (
  <FlexLayout wrap spacing={16} align="center">
    <Button
      value={'Button'}
      renderLeft={(props) => <Icon {...props} name="star" />}
    />
    <Button value={(props) => <Icon {...props} name="star" />} />
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
  <FlexLayout wrap spacing={16} align="center">
    {['primary', 'normal', 'info', 'success', 'warning', 'error'].map(
      (status) => (
        <Button key={status} value={'Button'} status={status} />
      )
    )}
  </FlexLayout>
)
```

### Disabled buttons

```jsx
import React from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => (
  <FlexLayout wrap spacing={16} align="center">
    {['solid', 'outline', 'ghost', 'link'].map((variant) => (
      <Button
        status="primary"
        key={variant}
        disabled
        value={'Button'}
        variant={variant}
      />
    ))}
    {['solid', 'outline', 'ghost', 'link'].map((variant) => (
      <Button
        status="normal"
        key={variant}
        disabled
        value={'Button'}
        variant={variant}
      />
    ))}
  </FlexLayout>
)
```

### Button with loading

```jsx
import React, { useState } from 'react'
import { FlexLayout, Button } from '@cloud-design/components'

export default () => {
  const [loading, setLoading] = useState(false)
  return (
    <FlexLayout direction="vertical" spacing={16}>
      <Button
        onPress={() => setLoading((prev) => !prev)}
        status="primary"
        style={{ maxWidth: 200 }}
        value={'Trigger loading'}
      />
      <FlexLayout wrap spacing={16} align="center">
        {['primary', 'normal', 'info', 'success', 'warning', 'error'].map(
          (status) => (
            <Button
              loading={loading}
              loadingText={'Loading'}
              key={status}
              value={'Button'}
              status={status}
            />
          )
        )}
      </FlexLayout>
      <FlexLayout wrap spacing={16} align="center">
        {['primary', 'normal', 'info', 'success', 'warning', 'error'].map(
          (status) => (
            <Button
              variant="ghost"
              loading={loading}
              loadingText={'Loading'}
              key={status}
              value={'Button'}
              status={status}
            />
          )
        )}
      </FlexLayout>
    </FlexLayout>
  )
}
```
