import { Pressable, Text, View } from 'react-native'

const locationItem = ({callback}) => {
    return (
        <Pressable onPress={callback} className="flex-row items-center justify-between space-x-4 py-3 px-4 focus:bg-gray-200 border-b border-gray-300"> 
            <View>
                <Text className="text-sm font-bold">12:00</Text>
                <Text className="text-xs">18 Jun</Text>
            </View>
            <View className="w-full">
                <Text className="text-sm font-bold">Delhi NCR</Text>
                <Text className="text-xs break-all whitespace-break-spaces">Beside Rajib Chow , New Delhi 7000123</Text>
            </View>
        </Pressable>
    )
}

export default locationItem