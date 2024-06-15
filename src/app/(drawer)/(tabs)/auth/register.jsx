import { Alert, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import MainButton from '../../../../components/button'
import { PhoneIcon, UserIcon, EnvelopeIcon } from "react-native-heroicons/outline";

const register = () => {
    const [isLoading, setLoading] = useState(false);

    const register = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            Alert.alert('Logged In');
            router.replace('auth/verify')
        }, 5000);
    }

    const googleLogin = () => {
        Alert.alert('Google login currenly not available');
    }

    const facebookLogin = () => {
        Alert.alert('Facebook login currenly not available');
    }

    const appleLogin = () => {
        Alert.alert('Apple login currenly not available');
    }

    return (
        <View>
            <View className="w-full min-h-screen relative">
                <Image className="w-full h-60" source={{uri: "https://images.unsplash.com/photo-1658356162600-2923b8d8bb60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} alt="background image" />
            </View>

            <View className="w-full h-full absolute -top-6 left-0 z-10 p-2 flex-1 flex-row flex-nowrap justify-center items-center">
                <View className="w-full bg-white max-w-sm rounded-xl shadow-md">
                    <View className="px-6 py-8 space-y-4">
                        {/* auth page switch buttons */}
                        <View className="rounded-lg border-[2px] border-blue-800 flex-row items-center p-0">
                            <View className="w-1/2 px-4 py-2.5 bg-blue-800 rounded-md focus:outline-none focus:bg-blue-900">
                                <Text className="text-white font-semibold text-center">SIGN UP</Text>
                            </View>
                            <Link replace href={'auth/login'} asChild className="w-1/2">
                                <Pressable>
                                    <View className="px-4 py-2.5 bg-white rounded-md focus:outline-none focus:bg-blue-900">
                                        <Text className="text-blue-800 font-semibold text-center">LOGIN</Text>
                                    </View>
                                </Pressable>
                            </Link>
                        </View>

                        {/* inputs */}
                        <View className="w-full space-y-4">
                            {/* name */}
                            <View className="w-full flex-row items-center bg-white border-2 border-blue-800 p-2.5 rounded-lg">
                                <UserIcon size={20} strokeWidth={2} color={'#1e40af'}/>

                                <TextInput className="flex-1 pl-2 bg-white rounded-lg text-gray-900 text-sm placeholder-blue-800" placeholder="Enter Full Name" placeholderTextColor={'#1e40af'} required />
                            </View>
                            {/* email */}
                            <View className="w-full flex-row items-center bg-white border-2 border-blue-800 p-2.5 rounded-lg">
                                <EnvelopeIcon size={20} strokeWidth={2} color={'#1e40af'}/>

                                <TextInput className="flex-1 pl-2 bg-white rounded-lg text-gray-900 text-sm placeholder-blue-800" placeholder="Enter Email" placeholderTextColor={'#1e40af'} required />
                            </View>
                            {/* phone */}
                            <View className="w-full flex-row items-center bg-white border-2 border-blue-800 p-2.5 rounded-lg">
                                <PhoneIcon size={20} strokeWidth={2} color={'#1e40af'}/>

                                <TextInput className="flex-1 pl-2 bg-white rounded-lg text-gray-900 text-sm placeholder-blue-800" placeholder="Enter Phone" placeholderTextColor={'#1e40af'} required />
                            </View>

                            <MainButton title="Get Started" callback={register} loading={isLoading} disabled={isLoading} />

                            {/* social logins */}
                            <View className="w-full">
                                <Text className="text-center text-blue-800 font-semibold text-sm">OR</Text>
                            </View>
                
                            {/* google facebook apple login */}
                            <View className="w-full flex-row justify-center items-center gap-2">
                                {/* google */}
                                <TouchableOpacity onPress={googleLogin} className="w-auto rounded-full">
                                    <View className="p-1 border-2 border-blue-900 rounded-full flex justify-center items-center">
                                        <Image source={{uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"}} className="h-10 w-10 rounded-full" />
                                    </View>
                                </TouchableOpacity>
                                {/* facebook */}
                                <TouchableOpacity onPress={facebookLogin} className="w-auto rounded-full">
                                    <View className="p-3 border-2 border-blue-900 rounded-full flex justify-center items-center">
                                        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"}} className="h-6 w-6 rounded-full" />
                                    </View>
                                </TouchableOpacity>
                                {/* apple */}
                                <TouchableOpacity onPress={appleLogin} className="w-auto rounded-full">
                                    <View className="p-2 border-2 border-blue-900 rounded-full flex justify-center items-center">
                                        <Image source={{uri: "https://w7.pngwing.com/pngs/537/405/png-transparent-apple-logo-apple-company-heart-logo.png"}} className="h-8 w-8 rounded-full" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default register