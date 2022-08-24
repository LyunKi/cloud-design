import { View, RouteItem } from '@ui-creator/common'

export const IndexView: View = {
  children: [
    {
      type: 'Text',
      props: [{ name: 'value', value: 'index' }],
    },
  ],
}

export const IndexRoute: RouteItem = {
  name: 'Index',
  view: IndexView,
}
