import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native'
import { ArrowsRightLeftIcon } from "react-native-heroicons/outline";

const ticketItem = () => {
    const router = useRouter();

    return (
        <Pressable onPress={()=>{router.push('bookings/ticket')}} className="w-full mb-4 block relative bg-white rounded-2xl">
            <View className="block absolute top-[55px] left-0 w-4 h-6 bg-gray-100 rounded-r-full z-50"></View>
            <View className="block absolute top-[55px] right-0 w-4 h-6 bg-gray-100 rounded-l-full z-50"></View>

            <View className="w-full bg-white rounded-2xl flex-row justify-center items-center px-8 py-4 border-b border-slate-700 border-dashed">
                <View className="items-start">
                    <Text className="text-sm font-semibold text-blue-900">Delhi</Text>
                    <Text className="text-xs text-slate-500">Jan 17, 12:00 AM</Text>
                </View>
                {/* middle svg */}
                <View className="flex-1 flex-row justify-center items-center">
                    <ArrowsRightLeftIcon size={20} strokeWidth={2} color={'#a5b4fc'} />
                </View>
                <View className="items-end">
                    <Text className="text-[12px] font-[600] text-blue-900 ">Pune</Text>
                    <Text className="text-[11px] font-[400] text-slate-500">Jan 18, 05:00 PM</Text>
                </View>
            </View>

            <View className="w-full bg-white rounded-2xl flex-row justify-between items-center space-x-4 px-8 py-4">
                <Text className="text-sm font-medium text-slate-500">Today</Text>
                <Text className="text-sm font-medium text-slate-500">1 Person</Text>
                <Text className="text-sm font-medium text-slate-500">$200</Text>
            </View>
        </Pressable>
    )
}

export default ticketItem