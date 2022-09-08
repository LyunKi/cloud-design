import { App } from '@ui-creator/common'
import { HomeRoute } from '../views/Home'

export const AppConfig: App = {
  name: 'cloud-designer',
  widgetDeps: [
    {
      name: '@cloud-design/components',
      version: '*',
      specifiers: [{ name: 'Text' }, { name: 'Icon' }, { name: 'FlexLayout' }],
    },
  ],
  navigation: {
    initialRouteName: 'Home',
    groups: [
      {
        items: [HomeRoute],
        name: 'Main',
      },
    ],
  },
}
