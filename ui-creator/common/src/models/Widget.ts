import { Prop } from './Prop'

export interface Widget {
  type: string
  props: Prop[]
  children?: Widget[]
}
