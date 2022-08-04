import { defineConfig, IConfig } from 'dumi'

export default defineConfig({
  title: '@cloud-design',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  resolve: {
    includes: ['docs', 'packages/components', 'packages/icons'],
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://lyunki.github.io//cloud-design/'
      : '/',
  runtimePublicPath: true,
  hash: true,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/LyunKi/cloud-design',
    },
  ],
  // more config: https://d.umijs.org/config
} as IConfig)
