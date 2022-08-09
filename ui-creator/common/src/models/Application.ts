import { I18n } from './I18n'
import { Route } from './Route'
import { Theme } from './Theme'

export interface Application {
  name: string
  route: Route
  theme: Theme
  i18n: I18n
}
