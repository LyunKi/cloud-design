import React from 'react'
import Layout from 'dumi-theme-default/es/layout'
import { GlobalProvider } from '@cloud-design/components'
import { usePrefersColor } from 'dumi/theme'
import { Appearance } from 'react-native'

export default ({ children, ...props }) => {
  const [color] = usePrefersColor()
  const prefer =
    (color === 'auto' ? Appearance.getColorScheme() ?? 'light' : color) ??
    'light'
  return (
    <Layout {...props}>
      <GlobalProvider themeMode={prefer}>{children}</GlobalProvider>
    </Layout>
  )
}
