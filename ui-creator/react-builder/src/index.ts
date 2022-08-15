import { App, Builder } from '@ui-creator/common'
import { Component, ReactElement } from 'react'

export class RnBuilder extends Builder<Component, ReactElement> {
  build(app: App): ReactElement {
    throw new Error('Method not implemented.')
  }
}
