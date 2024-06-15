import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { ChevronLeftIcon, ArrowRightIcon, FunnelIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"
import BusCard from '../../components/busCard'

const listing = () => {
  const navigation = useNavigation();
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full mt-10 border-b border-gray-300 flex-row justify-between items-center px-4 py-2">
        <View className="w-full max-w-[80%] md:max-w-full flex-row items-center gap-4">
          {/* back arrow */}
          <Pressable onPress={()=>router.back()} className="focus:outline-none focus:fill-blue-600">
            <ChevronLeftIcon size={26} strokeWidth={2} color={'#000000'}/>
          </Pressable>
          {/* details */}
          <View className="block w-full max-w-[90%] md:max-w-[unset]">
              <View className="w-full flex-row items-center gap-3">
                  <Text className="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">Delhi</Text>
                  <ArrowRightIcon size={20} strokeWidth={2} color={'#9ca3af'}/>
                  <Text className="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">Pune</Text>
              </View>
              <View>
                <Text className="text-sm text-slate-600">6 Buses</Text>
              </View>
          </View>
        </View>
        <Pressable className="flex flex-col items-center gap-1">
          <View className="bg-blue-800 rounded-full flex-row justify-center items-center px-3 py-1.5">
              <Text className="text-xs font-semibold text-white">15 Jun</Text>
          </View>
          <Text className="text-xs font-medium text-slate-600">Mon</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View className="w-full min-h-screen bg-slate-100 p-6">
          {/* filters */}
          <View className="w-full flex-row justify-start items-center gap-4">
              {/* filer */}
              <Pressable className="w-fit bg-white rounded-lg focus:bg-gray-300">
                <View className="px-3 py-1 flex-row justify-center items-center space-x-2 border-2 border-gray-300 rounded-lg">
                  <FunnelIcon size={16} strokeWidth={2} color={'#000000'}/>
                  <Text className="text-base font-medium text-gray-900 m-0">Filter</Text>
                </View>
              </Pressable>
              {/* sort */}
              <Pressable className="w-fit bg-white rounded-lg focus:bg-gray-300">
                <View className="px-3 py-1 flex-row justify-center items-center space-x-2 border-2 border-gray-300 rounded-lg">
                  <AdjustmentsHorizontalIcon size={16} strokeWidth={2} color={'#000000'}/>
                  <Text className="text-base font-medium text-gray-900 m-0">Sort</Text>
                </View>
              </Pressable>
          </View>

          {/* listing */}
          <View className="mt-6">
            <BusCard />
            <BusCard />
            <BusCard />
            <BusCard />
            <BusCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default listing