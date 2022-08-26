import { render } from '@testing-library/react-native'
import React from 'react'
import { FlexLayout } from '@cloud-design/components'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(
      <FlexLayout align="center" justify="center" direction="column" />
    ).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
