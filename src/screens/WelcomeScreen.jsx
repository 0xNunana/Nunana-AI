import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
    const navigation= useNavigation()
  return (
    <SafeAreaView className=' flex-1 flex justify-around bg-[#B7C9F2]'>
      <View className='space-y-2'>
        <Text className='text-center  font-bold text-purple-500 ' style={{fontSize:hp(7)}}>
            Nunana
        </Text>
        <Text className='text-center tracking-wider text-neutral-600 ' style={{fontSize:hp(2.5)}}>
            Your AI powered companion for life
        </Text>
      </View>

      {/* image */}
      <View className='flex justify-center items-center'>
        <Image source={require('../../assets/logo.png')} 
        style={{width:hp(50),height:hp(60)}}/>
      </View>

    <TouchableOpacity className='bg-[#F9F07A] mx-20 p-4 rounded-3xl' onPress={()=>navigation.navigate('Home')}>
        <Text className='text-center text-[#9195F6] font-semibold ' style={{fontSize:hp(2)}}>
            Evolve
        </Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WelcomeScreen