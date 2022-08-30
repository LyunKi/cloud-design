import { App } from '@ui-creator/common'
import { AppListRoute } from '../views/AppList'

export const AppConfig: App = {
  name: 'cloud-designer',
  widgetDeps: [
    {
      name: '@cloud-design/components',
      version: '*',
      specifiers: [{ name: 'Text' }, { name: 'FlexLayout' }],
    },
  ],
  navigation: {
    initialRouteName: 'AppList',
    groups: [
      {
        items: [AppListRoute],
        name: 'Main',
      },
    ],
  },
}
