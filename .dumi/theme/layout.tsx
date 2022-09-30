import React from 'react'
import Layout from 'dumi-theme-default/es/layout'
import { ConfigProvider } from '@cloud-design/components'
import { usePrefersColor } from 'dumi/theme'
import { Appearance } from 'react-native'

export default ({ children, ...props }) => {
  const [color] = usePrefersColor()
  const prefer =
    (color === 'auto' ? Appearance.getColorScheme() ?? 'light' : color) ??
    'light'
  return (
    <Layout {...props}>
      <ConfigProvider themeMode={prefer}>{children}</ConfigProvider>
    </Layout>
  )
}
