import { render } from '@testing-library/react-native'
import { View } from '@cloud-design/components/src'
import React from 'react'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(<View ts={{ color: 'black' }} />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
