import { ImageSourcePropType } from 'react-native'
import { Themeable } from '../common'

export interface BasicAvatarProps {
  src: ImageSourcePropType
  size?: number | string
}
export type AvatarProps = Themeable<BasicAvatarProps>
