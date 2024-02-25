import { View, Text ,Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Features from '../components/Features'
import { dummyMessages } from '../Data/dummy.js'




const HomeScreen = () => {

const [messages, setMessages]=useState(dummyMessages)

  return (
    <View className='flex-1 bg-[#B7C9F2]/30'>
 <SafeAreaView className='flex-1 flex mx-5'>

  {/* icon */}
      <View className='flex-row pt-3 justify-center'>
        <Image source={require('../../assets/logo.png')}
        style={{height:hp(10),width:hp(10)}}
        className='rounded-full'
        />
      </View>

{/* features || message history */}
{
  messages.length >0 ?(
    <View className='space-y-2 flex-1'> 
<Text>
  Assistant
</Text>

<View className='bg-white p-4 rounded-3xl' style={{height:hp(70)}}>
  <ScrollView bounces={false} className='space-y-4' showsVerticalScrollIndicator={false}>
    {messages.map((message,i)=>{
      
      if(message.role=='assistant'){
        if(message.content.includes('https')){
          //ai image
          return (
            <View key={i} className='flex-row justify-start'>
              <View  className='p-2 flex  bg-gray-200 rounded-2xl rounded-tl-none'>
              <Image source={{uri:message.content}}
              resizeMode='contain'
              style={{height:wp(60),width:wp(60)}}
             
              />
              </View>
          
 
            </View>
          )
        }else{
          //text response
          return (
            <View key={i} className='flex-row justify-start' style={{width:wp(60)}}>
  <View  className='bg-gray-200 rounded-r-lg px-3 py-2 rounded-bl-lg'>
  <Text className=' text-left'>
    {message.content}
  </Text>
  </View>
            </View>
          )
        }

      }else{
        //user input
        return (
          <View key={i} className='flex-row justify-end '>
<View className='bg-purple-200 rounded-l-lg px-3 py-2 rounded-br-lg'>
<Text className=' text-right'>
  {message.content}
</Text>
</View>
          </View>
        )
      }

  
    })}
  </ScrollView>
</View>

    </View>
  ):(<View>
    <Features/>
  </View>)
}


    </SafeAreaView>
    </View>
   
  )
}

export default HomeScreen