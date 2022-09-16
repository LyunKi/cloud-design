import React from 'react'
import Layout from 'dumi-theme-default/es/layout'
import { ConfigProvider, CLOUD_THEME_PACK } from '@cloud-design/components'
import { usePrefersColor } from 'dumi/theme'
import { Appearance } from 'react-native'

export default ({ children, ...props }) => {
  const [color] = usePrefersColor()
  const prefer =
    (color === 'auto' ? Appearance.getColorScheme() ?? 'light' : color) ??
    'light'
  const themePack = CLOUD_THEME_PACK[prefer]
  return (
    <Layout {...props}>
      <ConfigProvider themePack={themePack}>{children}</ConfigProvider>
    </Layout>
  )
}
