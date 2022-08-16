import { I18nPacks } from './I18n'
import { Navigation } from './Navigation'
import { ThemePacks } from './Theme'

export interface App {
  name: string
  navigation: Navigation
  themePacks: ThemePacks
  i18nPacks: I18nPacks
}
