import { View, Text, Image } from 'react-native'
import React from 'react'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'

const Features = () => {
  return (
    <View style={{height:hp(60)}} className='space-y-4'>
      <Text style={{fontSize:wp(6.5)}} className='font-semibold text-gray-800'>Features</Text>
   
   {/* chatgpt */}
    <View className='bg-purple-200 p-4 rounded-xl space-y-2'>
<View className='flex-row items-center space-x-3'>
    <Image source={require('../../assets/cha.png')}
    style={{height:hp(6),width:hp(5)}}
    />
    <Text style={{fontSize:wp(4.8)}} className='font-semibold text-gray-700'>
        Chat GPT-4
    </Text>
</View>
<Text style={{fontSize:wp(3.8)}}>
ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.
</Text>
    </View>

    {/* dalle */}
    <View className='bg-cyan-200 p-4 rounded-xl space-y-2'>
<View className='flex-row items-center space-x-3'>
    <Image source={require('../../assets/dal.png')}
    style={{height:hp(4),width:hp(4)}}
    />
    <Text style={{fontSize:wp(4.8)}} className='font-semibold text-gray-700'>
        DALL-E 3
    </Text>
</View>
<Text style={{fontSize:wp(3.8)}}>
DALL·E-3 is an AI image generation developed by OpenAI that enables you to effortlessly transform your concepts into remarkably precise images.
</Text>
    </View>

    {/* Smart Ai */}
    <View className='bg-[#F9F07A]/50 p-4 rounded-xl space-y-2'>
<View className='flex-row items-center space-x-3'>
    <Image source={require('../../assets/sma.png')}
    style={{height:hp(4),width:hp(4)}}
    />
    <Text style={{fontSize:wp(4.8)}} className='font-semibold text-gray-700'>
        Smart AI
    </Text>
</View>
<Text style={{fontSize:wp(3.8)}}>
A powerful voice assistant that harnesses the power of ChatGPT and Dall-E to provide you with quick search
</Text>
    </View>



    </View>
  )
}

export default Features