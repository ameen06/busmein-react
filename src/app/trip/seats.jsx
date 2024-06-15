import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ArrowRightIcon, InformationCircleIcon } from "react-native-heroicons/outline"
import { MaterialIcons } from '@expo/vector-icons';
import MainButton from '../../components/button'

const seats = () => {
  const router = useRouter()
  const [openSeatTypes, setOpenSeatTypes] = useState(false)
  const [loadingBoardingPoints, setLoadingBoardingPoints] = useState(false)


  const seatselectionComplete = () => {
    setLoadingBoardingPoints(true)
    setTimeout(() => {
      setLoadingBoardingPoints(false)
      router.replace('trip/boarding')
    }, 3000);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full mt-10 border-b border-gray-300 flex-row justify-between items-center px-4 py-2">
        <View className="w-full flex-row items-center gap-4">
          {/* back arrow */}
          <Pressable onPress={()=>router.back()} className="focus:outline-none focus:fill-blue-600">
            <ChevronLeftIcon size={26} strokeWidth={2} color={'#000000'}/>
          </Pressable>
          {/* details */}
          <View className="block w-full max-w-[90%] md:max-w-[unset]">
              <View>
                <Text className="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">Select Seats</Text>
              </View>
              <View className="w-full flex-row items-center gap-3">
                  <Text className="m-0 text-sm text-slate-600 capitalize line-clamp-1">Delhi</Text>
                  <ArrowRightIcon size={20} strokeWidth={2} color={'#9ca3af'}/>
                  <Text className="m-0 text-sm text-slate-600 capitalize line-clamp-1">Pune</Text>
              </View>
          </View>
        </View>
      </View>

      <ScrollView>
        <View className="w-full min-h-screen justify-start items-start bg-slate-100 p-6">
          <View className="w-full flex-row justify-between items-center">
            <Text className="flex-1 m-0 text-xl font-bold text-gray-900">Pick Seats</Text>

            <Pressable onPress={()=>setOpenSeatTypes(!openSeatTypes)} className="bg-slate-300 focus:outline-none focus:bg-blue-300 rounded-lg px-2 py-1 text-center flex-row items-center space-x-2">
              <InformationCircleIcon size={20} strokeWidth={2} color={'#2563eb'}/>
              <Text className="text-gray-800 font-medium text-sm">Seat Types</Text>
            </Pressable>
          </View>

          {openSeatTypes && (
            <View className="w-full mt-6 bg-transparent rounded-md border-2 border-gray-300 p-6">
              <View className="w-full flex-row items-center justify-between space-x-4">
                {/* taken seat */}
                <View className="flex-row items-center space-x-2">
                  <MaterialIcons name="event-seat" size={24} color="#374151" />
                  <Text className="font-medium text-gray-800">Taken</Text>
                </View>

                {/* available */}
                <View className="flex-row items-center space-x-2">
                  <MaterialIcons name="event-seat" size={24} color="#15803d" />
                  <Text className="font-medium text-gray-800">Available</Text>
                </View>

                {/* you selected */}
                <View className="flex-row items-center space-x-2">
                  <MaterialIcons name="event-seat" size={24} color="#1d4ed8" />
                  <Text className="font-medium text-gray-800">Selected</Text>
                </View>
              </View>
            </View>
          )}

          {/* seats */}
          <View className="w-full mt-8 max-w-xs mx-auto bg-white pb-4 border border-gray-400 rounded-lg shadow-sm pb-8">
            <View className="w-full p-3 border-b border-gray-300">
              <MaterialIcons name="event-seat" size={24} color="#374151" />
            </View>
          </View>

          <MainButton title="Select Boarding Point" callback={seatselectionComplete} loading={loadingBoardingPoints} disabled={loadingBoardingPoints} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default seats