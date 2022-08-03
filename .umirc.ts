import { defineConfig, IConfig } from 'dumi'

export default defineConfig({
  title: '@cloud-design',
  mode: 'site',
  logo: 'https://img01.yzcdn.cn/vant/logo.png',
  favicon: 'https://img01.yzcdn.cn/vant/logo.png',
  resolve: {
    includes: ['docs', 'packages/components', 'packages/icons'],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  // more config: https://d.umijs.org/config
} as IConfig)
