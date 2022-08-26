import { render } from '@testing-library/react-native'
import { FlexLayout } from '@cloud-design/flex-layout'
import React from 'react'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(
      <FlexLayout align="center" justify="center" direction="column" />
    ).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
