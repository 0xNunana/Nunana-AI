import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <View className='flex-1 bg-white'>
 <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
    </View>
   
  )
}

export default HomeScreen