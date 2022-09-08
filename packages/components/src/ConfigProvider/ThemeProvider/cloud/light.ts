import merge from 'lodash/merge'
import variables from './variables'

const LIGHT_THEME = merge({}, variables, {
  color: {
    layoutBg: '$color.white',
    font: {
      default: '$color.gray.800',
    },
    brand: {
      ...variables.color.teal,
    },
  },
})

export default LIGHT_THEME
