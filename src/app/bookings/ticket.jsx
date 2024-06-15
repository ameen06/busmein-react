import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ArrowsRightLeftIcon } from "react-native-heroicons/outline"
import MainButton from '../../components/button'
import { useRouter } from 'expo-router'

const ticket = () => {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1">
            <ScrollView className="pb-24">
                <View className="w-full mt-8 justify-center items-center">
                    <View className="w-full max-w-xs bg-white rounded-2xl py-4 relative bg-slate-00">
                        <View className="w-full px-4 mt-4">
                            <Image source={{uri: "https://ik.imagekit.io/k4cixy45r/assets/busmein-logo_S4V_D21jj.png?updatedAt=1706453127454"}} className="w-28 h-8" />
                        </View>

                        {/* ticket */}
                        <View className="w-full mt-6 bg-white flex-row justify-center items-center px-4 pb-6 border-b border-gray-300 border-dashed">
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

                        {/* more details */}
                        <View className="w-full border-b border-dashed border-gray-300 p-4">
                            <View className="w-full flex-row justify-between items-start space-x-4">
                                <View className="w-auto">
                                    <Text className="text-xs text-slate-500">Passengers</Text>
                                    <Text className="mt-1 text-sm font-medium text-black">2 People</Text>
                                </View>
                                <View className="w-auto">
                                    <Text className="text-xs text-slate-500 text-center">Seat No.</Text>
                                    <Text className="mt-1 text-sm font-medium text-black text-center">12, 13</Text>
                                </View>
                                <View className="w-auto">
                                    <Text className="text-xs text-slate-500 text-right">Ticket No</Text>
                                    <Text className="mt-1 text-sm font-medium text-black text-right">#6542354865</Text>
                                </View>
                            </View>
                            <View className="w-full mt-4 flex-row justify-between items-start space-x-4">
                                <View className="w-auto">
                                    <Text className="text-xs text-slate-500">Ticket fare</Text>
                                    <Text className="mt-1 text-sm font-medium text-black">$200</Text>
                                </View>
                                <View className="w-auto">
                                    <Text className="text-xs text-slate-500 text-right">Rest stops</Text>
                                    <Text className="mt-1 text-sm font-medium text-black text-right">1 Stop</Text>
                                </View>
                            </View>

                            <View className="text-center mt-8 mb-6">
                                <Text className="text-sm font-medium">Ticket Status : CONFIRMED</Text>
                            </View>
                        </View>

                        <View className="w-full my-6 items-center">
                            <Image source={{uri: "https://ik.imagekit.io/k4cixy45r/bumein/barcode-image_8FTqMjDBl.png?updatedAt=1718403807950"}} className="h-20 w-8/12" />
                        </View>
                    </View>

                    <View className="w-full max-w-xs mt-6 flex-1">
                        <MainButton title="Track Bus" callback={()=>router.replace('/')} className="w-full" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ticket