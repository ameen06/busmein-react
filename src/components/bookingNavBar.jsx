import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { Link, usePathname } from 'expo-router'

const bookingNavBar = () => {
    const path = usePathname()

    console.log(path)

    const tabActiveClasses = "bg-blue-700 border-none shadow-md";
    const tabInactiveClasses = "bg-white border border-gray-200";

    return (
        <View className="w-full mt-4 flex-row justify-center md:justify-start items-center">
            <View className="w-full max-w-sm px-2 flex-row justify-between items-center gap-2">
                <Link replace href={'/bookings/active'} asChild className="w-fit block">
                    <Pressable>
                        <View className={`focus:bg-blue-800 rounded-xl px-4 py-2 focus:outline-none ${path == '/bookings/active' || path == '/bookings' ? tabActiveClasses : tabInactiveClasses}`}>
                            <Text className={`font-medium text-center text-sm ${path == '/bookings/active' || path == '/bookings' ? 'text-white' : 'text-blue-800'}`}>ACTIVE</Text>
                        </View>
                    </Pressable>
                </Link>
                <Link replace href={'/bookings/complete'} asChild className="w-fit block">
                    <Pressable>
                        <View className={`focus:bg-blue-800 rounded-xl px-4 py-2 focus:outline-none ${path == '/bookings/complete' ? tabActiveClasses : tabInactiveClasses}`}>
                            <Text className={`font-medium text-center text-sm ${path == '/bookings/complete' ? 'text-white' : 'text-blue-800'}`}>COMPLETED</Text>
                        </View>
                    </Pressable>
                </Link> 
                <Link replace href={'/bookings/cancelled'} asChild className="w-fit block">
                    <Pressable>
                        <View className={`focus:bg-blue-800 rounded-xl px-4 py-2 focus:outline-none ${path == '/bookings/cancelled' ? tabActiveClasses : tabInactiveClasses}`}>
                            <Text className={`font-medium text-center text-sm ${path == '/bookings/cancelled' ? 'text-white' : 'text-blue-800'}`}>CANCELLED</Text>
                        </View>
                    </Pressable>
                </Link> 
            </View>
        </View>
    )
}

export default bookingNavBar

const styles = StyleSheet.create({})