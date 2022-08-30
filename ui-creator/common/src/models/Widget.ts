import { Prop } from './Prop'

export interface Widget {
  type: string
  props: Prop[]
  children?: Widget[]
}

export interface WidgetDep {
  name: string
  version: string
  specifiers: {
    name: string
    alias?: string
  }[]
}
