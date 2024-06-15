import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import MainButton from '../../components/button'

const verify = () => {
  const [isLoading, setLoading] = useState(false);
  const [phone, setPhone] = useState(9856321456)

  const verify = () => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
          Alert.alert('Logged In');
          router.replace('/')
      }, 5000);
  }

  return (
      <View>
          <View className="w-full min-h-screen relative">
              <Image className="w-full h-60" source={{uri: "https://images.unsplash.com/photo-1658356162600-2923b8d8bb60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="background image" />
          </View>

          <View className="w-full h-full absolute -top-6 left-0 z-10 p-2 flex-1 flex-row flex-nowrap justify-center items-center">
              <View className="w-full bg-white max-w-sm rounded-xl shadow-md">
                  <View className="px-6 py-8 space-y-4">
                      {/* inputs */}
                      <View className="w-full space-y-4">
                          <View className="w-full">
                            <Text className="text-center text-xl font-bold text-blue-800">Verify Your Mobile Number </Text>
                            <Text className="text-center text-sm font-medium text-blue-700 mt-1">OTP has been sent to +{ phone }</Text>
                          </View>

                          {/* phone */}
                          <View className="w-full flex-row items-center bg-white border-2 border-blue-800 p-2.5 rounded-lg">
                              <TextInput className="flex-1 bg-white rounded-lg text-gray-900 text-sm placeholder-blue-800" placeholder="Enter OTP" placeholderTextColor={'#1e40af'} required />
                          </View>

                          <MainButton title="Get Started" callback={verify} loading={isLoading} disabled={isLoading} />
                      </View>
                  </View>
              </View>
          </View>
      </View>
  )
}

export default verify