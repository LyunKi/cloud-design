import { createNavigationContainerRef } from '@react-navigation/native'
import { WidgetRegistry, I18nManager, ThemeManager } from '@ui-creator/common'

export const CLOUD_DESIGN_NAMESPACE = '@cloud-design'

export const CloudRnWidgetRegistry = new WidgetRegistry()
export const CloudRnI18nManager = new I18nManager()
export const CloudRnThemeManager = new ThemeManager()
export const Navigator = createNavigationContainerRef()
