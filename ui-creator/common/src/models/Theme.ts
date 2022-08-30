import { KV, NestedString } from '@cloud-dragon/common-types'

export type ThemePack = KV<NestedString>

export type ThemePacks = KV<ThemePack>

export const DEFAULT_THEME = 'light'

export class ThemeManager {
  public theme = DEFAULT_THEME

  public themePacks: ThemePacks = {}

  public get themePack(): KV<NestedString> {
    return this.themePacks[this.theme]
  }
}
