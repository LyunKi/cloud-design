import merge from 'lodash/merge'
import variables from './variables'

const LIGHT_THEME = merge({}, variables, {
  color: {
    border: {
      default: '$color.gray.200',
    },
    bg: {
      disabled: '$color.gray.100',
      layout: '$color.white',
      secondary: '$color.gray.200',
    },
    font: {
      default: '$color.gray.800',
      reverse: '$color.whiteAlpha.900',
    },
    brand: {
      ...variables.color.teal,
    },
  },
})

export default LIGHT_THEME
