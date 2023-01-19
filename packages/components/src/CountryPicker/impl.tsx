import { FlatList } from 'react-native'
import filter from 'lodash/filter'
import React from 'react'
import { Country, I18nManager } from '../common'
import { View } from '../View'
import { COUNTRY_PACK, Icon } from '../Icon'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { Input } from '../Input'
import { COUNTRIES } from '../common/constants'
import { Button } from '../Button'
import {
  CountryCurrentPropKey,
  CountryItemProps,
  CountryPickerProps,
} from './api'

function CountryItem(props: CountryItemProps) {
  const { country, selectedCountry, keyProp = 'callingCode' } = props
  const { countryCode, name, [keyProp]: info } = country
  const showName = name[I18nManager.locale] ?? name.common
  return (
    <View
      ts={{
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Icon name={countryCode} pack={COUNTRY_PACK} />
      <Text ts={{ marginLeft: '$rem:0.5', flex: 1 }} value={showName} />
      <Text value={info} />
      <View style={{ width: 40, justifyContent: 'center' }}>
        {countryCode === selectedCountry?.countryCode && (
          <Icon color="$color.status.success" name="checkmark-outline" />
        )}
      </View>
    </View>
  )
}

const ITEM_HEIGHT = 10

function useCountryItems(params: {
  searchValue?: string
  selectedCountry?: Country
  keyProp?: CountryCurrentPropKey
}) {
  const { searchValue, selectedCountry, keyProp } = params
  return React.useMemo(() => {
    const countryItems = filter(COUNTRIES, (country) => {
      const { countryCode, name } = country
      const { common, zh_CN, en_US } = name
      return (
        countryCode !== selectedCountry?.countryCode &&
        (!searchValue ||
          common?.includes(searchValue) ||
          en_US?.includes(searchValue) ||
          zh_CN?.includes(searchValue) ||
          !!(keyProp && country[keyProp]?.includes(searchValue)))
      )
    })
    if (selectedCountry) {
      countryItems.unshift(selectedCountry)
    }
    return countryItems
  }, [searchValue, selectedCountry, keyProp])
}

export function CountryPicker(props: CountryPickerProps) {
  const { value, keyProp, onChange, hideFilter, title } = props
  const country = value ? I18nManager.getCountryByCode(value) : undefined
  const [searchValue, setSearchValue] = React.useState<string | undefined>(
    undefined
  )
  const seachCountry = React.useCallback((inputText: string) => {
    setSearchValue(inputText)
  }, [])
  const countryItems = useCountryItems({
    searchValue,
    selectedCountry: country,
    keyProp,
  })
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      {title}
      {!hideFilter && (
        <>
          <View ts={{ padding: '$rem:1' }}>
            <Input
              format={{ type: 'search' }}
              value={searchValue}
              onChange={seachCountry}
            />
          </View>
          <Divider />
        </>
      )}
      <View style={{ flex: 1 }}>
        <FlatList
          ItemSeparatorComponent={() => <Divider />}
          getItemLayout={(_data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          data={countryItems}
          renderItem={({ item }) => (
            <Button
              ts={{ borderRadius: 0 }}
              key={item.countryCode}
              variant="ghost"
              onPress={() => {
                onChange?.(item.countryCode)
              }}
              value={() => (
                <CountryItem
                  keyProp={keyProp}
                  country={item}
                  selectedCountry={country}
                />
              )}
            />
          )}
        />
      </View>
    </View>
  )
}
