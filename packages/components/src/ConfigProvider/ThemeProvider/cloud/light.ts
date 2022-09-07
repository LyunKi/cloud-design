import variables from './variables'

export default {
  color: {
    ...variables.color,
    layoutBg: '$color.white',
    font: {
      default: '$color.gray.800',
    },
  },
  fontSize: {
    ...variables.fontSize,
  },
}
