import { render } from '@testing-library/react-native'
import { Text } from '@cloud-design/components/src'
import React from 'react'

describe('<Text />', () => {
  it('render correctly', () => {
    const snapshot = render(<Text style={{ color: 'black' }} />).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
