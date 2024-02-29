import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { SafeAreaView } from 'react-native-safe-area-context'

const MapScreen = () => {
  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </SafeAreaView>
  )
}

export default MapScreen
