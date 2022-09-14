import { OverlayProps } from '../Overlay'

export interface MenuProps extends Omit<OverlayProps, 'getContentPosition'> {}
