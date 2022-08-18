import { App } from '@ui-creator/common'
import { IndexRoute } from '../views'

export const AppConfig: App = {
  name: 'cloud-designer',
  navigation: {
    initialRouteName: 'Index',
    groups: [
      {
        items: [IndexRoute],
        name: 'IndexGroup',
      },
    ],
  },
}
