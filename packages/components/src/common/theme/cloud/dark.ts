import merge from 'lodash/merge'
import variables from './variables'

const DARK_THEME = merge({}, variables, {
  color: {
    status: {
      info: '$color.blue.200',
      warning: '$color.orange.200',
      primary: '$color.brand.200',
      error: '$color.red.200',
      success: '$color.green.200',
    },
    border: {
      default: '$color.whiteAlpha.300',
      input: '$color.whiteAlpha.400',
    },
    placeholder: {
      default: '$color.whiteAlpha.400',
    },
    bg: {
      disabled: '$color.whiteAlpha.200',
      layout: '$color.gray.800',
      mask: '$color.blackAlpha.600',
      normal: {
        pressed: '$color.whiteAlpha.300',
        hovered: '$color.whiteAlpha.200',
      },
    },
    font: {
      default: '$color.gray.100',
      reverse: '$color.gray.800',
    },
    brand: {
      ...variables.color.teal,
    },
  },
})

export default DARK_THEME
