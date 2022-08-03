import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Icon from '@cloud-design/icons'

const data = ['activity']

export default function IconList() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {data.map((item) => {
            return (
              <View
                key={item}
                style={{
                  width: '25%',
                  alignItems: 'center',
                }}
              >
                <Icon name={item} size={24} />
                <Text style={{ color: '#646566', fontSize: 10 }}>{item}</Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
