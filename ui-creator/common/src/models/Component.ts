import { Prop } from './Prop'

export interface Component {
  type: string
  props: Prop[]
  children: Component[]
}
