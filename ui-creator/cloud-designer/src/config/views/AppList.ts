import { View, RouteItem } from '@ui-creator/common'

export const AppList: View = {
  children: [
    {
      type: 'FlexLayout',
      props: [{ name: 'align', value: 'center' }],
      children: [
        {
          type: 'Text',
          props: [{ name: 'value', value: 'UI Creator' }],
        },
      ],
    },
  ],
}

export const AppListRoute: RouteItem = {
  name: 'AppList',
  view: AppList,
}
