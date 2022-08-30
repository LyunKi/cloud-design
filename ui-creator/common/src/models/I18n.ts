import { KV, NestedString } from '@cloud-dragon/common-types'
import { interpolate } from '@cloud-dragon/common-utils'
import get from 'lodash/get'
import isString from 'lodash/isString'

export type I18nPack = KV<NestedString>

export type I18nPacks = KV<I18nPack>

export const DEFAULT_LOCALE = 'zh_CN'

export class I18nManager {
  public locale = DEFAULT_LOCALE

  public i18nPacks: I18nPacks = {}

  public get i18nPack(): KV<NestedString> {
    return this.i18nPacks[this.locale]
  }

  public t(key: string, context?: KV<any>) {
    const template = get(this.i18nPack, key)
    if (!isString(template)) {
      return key
    }
    return interpolate({ template, context }) ?? key
  }
}
