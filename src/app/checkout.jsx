import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { ChevronLeftIcon, ArrowRightIcon, EnvelopeIcon, PhoneIcon, UserIcon } from "react-native-heroicons/outline"
import { useRouter } from 'expo-router'
import MainButton from '../components/button'
import { useState } from 'react'

const checkout = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const checkoutBooking = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.replace('auth/login')
        }, 2000);
    }

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
                        <Text className="m-0 text-xl font-extrabold text-black capitalize line-clamp-1">Passenger Details</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View class="w-full bg-slate-100">
                    {/* traveling bus details */}
                    <View className="w-full bg-white py-4 px-4">
                        <Text className="text-sm font-medium text-slate-600 text-center capitalize">Kallada Travels</Text>
                        <View className="w-full flex-row justify-between items-start space-x-1 mt-3">
                            {/* from */}
                            <View>
                                <Text className="text-base font-bold text-black">Wed, 17 Jun, 12:00</Text>
                                <Text className="text-xs font-medium text-slate-600">Delhi</Text>
                            </View>
                            {/* arrow-svg */}
                            <View className="w-4 h-4 mt-2">
                                <ArrowRightIcon size={20} strokeWidth={2} color={'#9ca3af'}/>
                            </View>
                            {/* to */}
                            <View className="items-end">
                                <Text className="text-base font-bold text-black">Wed, 17 Jun, 16:00</Text>
                                <Text className="text-xs font-medium text-slate-600">Pune</Text>
                            </View>
                        </View>
                        <View className="w-fit max-w-[75px] flex-shrink rounded-full bg-indigo-300 mt-3 px-4 py-1">
                           <Text className="text-xs font-medium text-indigo-700">1 Seats</Text>
                        </View>
                    </View>

                    <View className="w-full min-h-[75vh] bg-slate-100 px-3 py-6">
                        {/* ticket info reciever */}
                        <View className="w-full bg-white rounded-lg shadow p-4">
                            <Text className="m-0 text-lg font-bold">Ticket Info Will Be Sent To</Text>

                            <View className="w-full mt-4">
                                {/* email */}
                                <View className="w-full flex-row items-center bg-white border border-gray-300 p-2.5 rounded-lg">
                                    <EnvelopeIcon size={20} strokeWidth={2} color={'#6b7280'}/>
                                    <TextInput className="flex-1 ml-2 bg-white text-gray-900 text-sm" placeholder="Enter Email" placeholderTextColor={'#6b7280'} required />
                                </View>

                                {/* phone */}
                                <View className="w-full mt-4 flex-row items-center bg-white border border-gray-300 p-2.5 rounded-lg">
                                    <PhoneIcon size={20} strokeWidth={2} color={'#6b7280'}/>
                                    <TextInput className="flex-1 ml-2 bg-white text-gray-900 text-sm" placeholder="Enter Phone" placeholderTextColor={'#6b7280'} required />
                                </View>
                            </View>
                        </View>

                        {/* passenger info */}
                        <View className="w-full rounded-lg bg-white shadow mt-2 p-4">
                            <Text className="m-0 text-xl font-extrabold">Passenger Details</Text>

                            <View className="w-full mt-4">
                                <Text className="text-sm text-gray-800 font-medium">Passenger of seat 12</Text>
                                
                                {/* name */}
                                <View className="w-full mt-2 flex-row items-center bg-white border border-gray-300 p-2.5 rounded-lg">
                                    <UserIcon size={20} strokeWidth={2} color={'#6b7280'}/>
                                    <TextInput className="flex-1 pl-2 bg-white rounded-lg text-gray-900 text-sm" placeholder="Name" placeholderTextColor={'#6b7280'} />
                                </View>
                    
                                <View className="w-full mt-2 flex-row justify-center items-center space-x-4">
                                    {/* <input type="number" placeholder="Age" v-model="passengerDetails[index]['age']" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 focus:outline-none" required> */}
                                    <TextInput className="flex-1 p-2.5 bg-white rounded-lg text-gray-900 text-sm border border-gray-300" placeholder="Age" placeholderTextColor={'#6b7280'} />

                                    <TextInput className="flex-1 p-2.5 bg-white rounded-lg text-gray-900 text-sm border border-gray-300" placeholder="Gender" placeholderTextColor={'#6b7280'} />

                                    {/* <select v-model="passengerDetails[index]['gender']" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 focus:outline-none" required>
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    </select> */}
                                </View>
                            </View>
                        </View>

                        <MainButton title="Pay Now" callback={checkoutBooking} loading={loading} disabled={loading} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default checkout