import { View, RouteItem } from '@ui-creator/common'

const HOME: View = {
  children: [
    {
      type: '@cloud-design/components:FlexLayout',
      props: [
        { name: 'direction', value: 'column' },
        {
          name: 'ts',
          value: { background: '$color.bg.layout' },
          valueType: 'object',
        },
      ],
      children: [
        {
          type: '@cloud-design/components:FlexLayout',
          props: [
            { name: 'align', value: 'center' },
            { name: 'justify', value: 'space-between' },
            {
              name: 'ts',
              value: { height: '$rem:4', paddingHorizontal: '$spacing.6' },
              valueType: 'object',
            },
          ],
          children: [
            {
              type: '@cloud-design/components:FlexLayout',
              props: [{ name: 'align', value: 'center' }],
              children: [
                {
                  type: '@ui-creator/cloud-designer:Logo',
                  props: [
                    { name: 'width', value: '$rem:2.25' },
                    { name: 'height', value: '$rem:2.25' },
                  ],
                },
                {
                  type: '@cloud-design/components:Text',
                  props: [
                    {
                      name: 'value',
                      value: 'UI Creator',
                    },
                    {
                      name: 'ts',
                      value: {
                        marginLeft: '$rem:0.5',
                        fontSize: '$fontSize.xl',
                        fontWeight: '$fontWeight.bold',
                      },
                      valueType: 'object',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export const HomeRoute: RouteItem = {
  name: 'Home',
  view: HOME,
}
