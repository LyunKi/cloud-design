import merge from 'lodash/merge'
import variables from './variables'

const DARK_THEME = merge({}, variables, {
  color: {
    ...variables.color,
    layoutBg: '$color.gray.800',
    font: {
      default: '$color.whiteAlpha.900',
    },
  },
})

export default DARK_THEME
