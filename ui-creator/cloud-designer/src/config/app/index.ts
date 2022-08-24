import { App } from '@ui-creator/common'
import { IndexRoute } from '../views'
import { HomeRoute } from '../views/home'

export const AppConfig: App = {
  name: 'cloud-designer',
  navigation: {
    initialRouteName: 'Index',
    groups: [
      {
        items: [IndexRoute, HomeRoute],
        name: 'Main',
      },
    ],
  },
}
