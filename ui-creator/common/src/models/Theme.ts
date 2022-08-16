import { KV, NestedString } from '@cloud-dragon/common-types'

export type ThemePack = KV<NestedString>

export type ThemePacks = KV<ThemePack>

export const DEFAULT_THEME = 'light'

export class ThemeManager {
  public theme = DEFAULT_THEME

  private themePacks: ThemePacks = {}

  public get themePack(): KV<NestedString> {
    return this.themePacks[this.theme]
  }

  public setThemePacks(themePacks: ThemePacks) {
    this.themePacks = themePacks
  }

  public configure(theme: string, themePacks: ThemePacks) {
    this.theme = theme
    this.themePacks = themePacks
  }
}
