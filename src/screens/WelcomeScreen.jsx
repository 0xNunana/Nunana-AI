import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation= useNavigation()
  return (
    <SafeAreaView className=' flex-1 flex justify-around bg-white'>
      <View className='space-y-2'>
        <Text className='text-center  font-bold text-purple-600 ' style={{fontSize:hp(7)}}>
            Nunana
        </Text>
        <Text className='text-center tracking-wider text-gray-400 ' style={{fontSize:hp(2.5)}}>
            Your AI powered companion for life
        </Text>
      </View>

      {/* image */}
      <View className='flex justify-center items-center'>
        <Image source={require('../../assets/logo.png')} 
        style={{width:hp(50),height:hp(60)}}/>
      </View>

    <TouchableOpacity className='bg-purple-600 mx-20 p-4 rounded-3xl' onPress={()=>navigation.navigate('Home')}>
        <Text className='text-center text-white ' style={{fontSize:hp(2)}}>
            Evolve
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen