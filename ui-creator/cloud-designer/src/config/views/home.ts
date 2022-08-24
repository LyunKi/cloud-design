import { View, RouteItem } from '@ui-creator/common'

export const HomeView: View = {
  children: [
    {
      type: 'Text',
      props: [{ name: 'value', value: 'home' }],
    },
  ],
}

export const HomeRoute: RouteItem = {
  name: 'Home',
  view: HomeView,
}
