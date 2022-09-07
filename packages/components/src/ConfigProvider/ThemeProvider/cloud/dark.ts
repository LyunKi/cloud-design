import variables from './variables'

export default {
  color: {
    ...variables.color,
    layoutBg: '$color.gray.800',
    font: {
      default: '$color.whiteAlpha.900',
    },
  },
  fontSize: {
    ...variables.fontSize,
  },
}
