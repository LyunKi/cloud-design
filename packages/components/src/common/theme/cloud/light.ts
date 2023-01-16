import merge from 'lodash/merge'
import variables from './variables'

const LIGHT_THEME = merge({}, variables, {
  color: {
    status: {
      info: '$color.blue.500',
      warning: '$color.orange.500',
      primary: '$color.brand.500',
      error: '$color.red.500',
      success: '$color.green.500',
    },
    border: {
      default: '$color.gray.200',
      input: '$color.gray.300',
    },
    placeholder: {
      default: '$color.gray.500',
    },
    normal: {
      50: '$color.gray.100',
      100: '$color.gray.200',
      200: 'transparent',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '$color.gray.100',
      600: '$color.gray.200',
      700: '$color.gray.300',
      800: '#1A202C',
      900: '#171923',
    },
    bg: {
      disabled: '$color.gray.100',
      layout: '$color.white',
      mask: '$color.blackAlpha.600',
      normal: {
        pressed: '$color.gray.200',
        hovered: '$color.gray.100',
      },
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
