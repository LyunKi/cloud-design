import { render } from '@testing-library/react-native'
import React from 'react'
import { View } from '@cloud-design/components/src'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(<View ts={{ color: 'black' }} />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
