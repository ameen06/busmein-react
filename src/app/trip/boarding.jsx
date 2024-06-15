import { Pressable, Text, View, ScrollView, SafeAreaView } from 'react-native'
import { ChevronLeftIcon, } from "react-native-heroicons/outline"
import LocationItem from '../../components/locationItem'
import { useRouter } from 'expo-router'

const boarding = () => {
    const router = useRouter()

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="w-full mt-10 border-b border-gray-300 flex-row justify-between items-center px-4 py-2">
                <View className="w-full flex-row items-center space-x-4">
                    {/* back arrow */}
                    <Pressable onPress={()=>router.back()} className="focus:outline-none focus:fill-blue-600">
                        <ChevronLeftIcon size={26} strokeWidth={2} color={'#000000'}/>
                    </Pressable>
                    {/* details */}
                    <View className="block w-full">
                        <Text className="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">Select Boarding Point</Text>
                    </View>
                </View>
            </View>
            {/* current page */}
            <View className="w-full bg-white flex-row items-center justify-around">
                <View className="w-full flex-1 border-b-2 border-blue-700 px-6 py-4">
                    <Text className="text-black font-semibold text-center">Boarding Points</Text>
                </View>
                <View className="w-full flex-1">
                    <Text className="text-black font-semibold text-center">Dropping Points</Text>
                </View>
            </View>

            <ScrollView>
                <View className="min-h-screen  bg-slate-100 pb-8">
                    <View className="w-full pt-6 px-4 justify-center items-center">
                        <View className="w-full rounded-lg shadow-sm bg-white">
                            <View className="w-full border-b-2 border-gray-300 py-2 px-4">
                                <Text className="font-semibold">All Boarding Points</Text>
                            </View>
                            <View className="w-full divide-y-2">
                                <LocationItem callback={()=>router.push('trip/dropping')} />
                                <LocationItem callback={()=>router.push('trip/dropping')} />
                                <LocationItem callback={()=>router.push('trip/dropping')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default boarding