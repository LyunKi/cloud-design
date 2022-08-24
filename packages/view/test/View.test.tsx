import { render } from '@testing-library/react-native'
import { View } from '@cloud-design/view'
import React from 'react'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(<View />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
