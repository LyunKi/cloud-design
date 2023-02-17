import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from '@cloud-design/components/src'

describe('<Text />', () => {
  it('render correctly', () => {
    const snapshot = render(<Text style={{ color: 'black' }} />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
