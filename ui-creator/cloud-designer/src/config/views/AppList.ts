import { View, RouteItem } from '@ui-creator/common'

export const AppList: View = {
  children: [
    {
      type: '@cloud-design/components:FlexLayout',
      props: [
        { name: 'align', value: 'center' },
        { name: 'justify', value: 'center' },
        { name: 'style', value: { height: '$rem:3' }, valueType: 'object' },
      ],
      children: [
        {
          type: '@cloud-design/components:Text',
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
