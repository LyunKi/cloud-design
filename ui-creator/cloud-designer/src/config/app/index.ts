import { App } from '@ui-creator/common'
import { AppListRoute } from '../views/AppList'

export const AppConfig: App = {
  name: 'cloud-designer',
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
