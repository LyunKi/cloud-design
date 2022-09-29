import { render } from '@testing-library/react-native'
import React from 'react'
import { Icon } from '@cloud-design/icons'

describe('<Icon />', () => {
  it('render correctly', () => {
    const snapshot = render(
      <Icon
        size={24}
        color="red"
        animation={{ type: 'zoom' }}
        name="facebook"
      />
    ).toJSON()
    expect(snapshot).toMatchSnapshot()
  })
})
