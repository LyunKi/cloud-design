import { ButtonProps } from '../Button'
import { OverlayProps } from '../Overlay'

export interface MenuItemProps extends Omit<ButtonProps, 'ghost'> {}

export interface MenuContentProps {}

export interface MenuProps extends Omit<OverlayProps, 'getContentPosition'> {}
