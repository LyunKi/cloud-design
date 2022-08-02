import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Icon from '@cloud-design/icons'

export default function IconList() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          {data.map((item, index) => {
            const paddingLength = data.length % 4 || 4
            return (
              <View
                key={item}
                style={{
                  width: '25%',
                  marginBottom: index < data.length - paddingLength ? 40 : 0,
                  alignItems: 'center',
                }}
              >
                <Icon name={item} />
                <Text style={{ color: '#646566', marginTop: 10, fontSize: 10 }}>
                  {item}
                </Text>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const data = ['activity']
