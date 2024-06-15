import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StarIcon } from "react-native-heroicons/solid"

const busCard = () => {
    const router = useRouter()

    return (
        <Pressable onPress={()=>router.push('trip/seats')} className="shadow bg-white rounded-xl px-4 py-2 mb-4">
            <View className="w-full border-b border-slate-400 border-dashed pb-3">
                <View className="flex-row justify-between">
                    <View className="">
                        <View className="">
                            <Text className="text-base font-bold text-black">12:00 AM - 04:00 PM</Text>
                        </View>
                        <View className="flex-row justify-between items-center gap-3">
                            <Text className="text-xs font-semibold text-slate-600">6h 10m</Text>
                            <Text className="text-xs font-semibold text-slate-600">42 Seats</Text>
                        </View>
                    </View>
                    <View className="flex justify-center items-center">
                        <View className="bg-blue-300 rounded-md flex justify-center items-center py-1 px-3">
                            <Text className="text-xs font-semibold text-blue-900 uppercase">CHEAPEST</Text>
                        </View>
                    </View>
                </View>
                {/* bus details */}
                <View className="mt-4">
                    <Text className="text-lg font-bold text-black capitalize">Cochin Express AC Seater</Text>
                    <Text className="text-xs font-medium text-slate-600">AC Multi Axle Semi Sleeper</Text>
                </View>
            </View>
            {/* second View */}
            <View className="mt-2 flex-row justify-between items-center ">
                <View className="w-fit px-2 py-1 bg-blue-800 rounded-md flex-row justify-center items-center">
                    <StarIcon size={12} color={'#facc15'}/>
                    <Text className="text-xs font-medium text-white pl-1 pt-[1px]">4.0</Text>
                </View>
                <View>
                    <Text className="font-semibold text-black">$200</Text>
                </View>
            </View>
        </Pressable>   
    )
}

export default busCard

const styles = StyleSheet.create({})