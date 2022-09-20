import merge from 'lodash/merge'
import variables from './variables'

const DARK_THEME = merge({}, variables, {
  color: {
    border: {
      default: '$color.whiteAlpha.300',
    },
    bg: {
      disabled: '$color.whiteAlpha.200',
      layout: '$color.gray.800',
      secondary: {
        pressed: '$color.whiteAlpha.300',
        hovered: '$color.whiteAlpha.200',
      },
    },
    font: {
      default: '$color.whiteAlpha.900',
      reverse: '$color.gray.800',
    },
    brand: {
      ...variables.color.teal,
    },
  },
})

export default DARK_THEME
