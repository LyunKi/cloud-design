import { render } from '@testing-library/react-native'
import { View } from '@cloud-design/components'
import React from 'react'

describe('<View />', () => {
  it('render correctly', () => {
    const snapshot = render(
      <View ts={{ color: '$color-primary-100' }} />
    ).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
