import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native'
import { PencilSquareIcon } from "react-native-heroicons/outline";

const profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="pb-24 mt-10">
        <View className="w-full items-center justify-center bg-transparent">
          <View className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-gray-200 relative">
            <Image className="w-32 h-32 rounded-full shadow-lg border-4 border-slate-100" source={{uri: "https://ik.imagekit.io/k4cixy45r/defaultt.jpg?updatedAt=1668418234132?tr=w-300,h-300"}} />

            <View className="absolute w-8 h-8 bg-indigo-800 top-0 right-0 rounded-full hidden items-center justify-center">
              <PencilSquareIcon size={16} strokeWidth={2} color={'white'} />
            </View>
          </View>
        </View>

        <View className="w-full mt-6 bg-white px-6 py-4">
          <Text className="text-2xl font-bold text-gray-900 text-center m-0">User Name</Text>

          <View className="w-full mt-6">
            <View className="w-full py-2 flex-row items-center justify-between gap-4">
              <Text className="text-gray-400">Phone</Text>
              <Text className="text-gray-800 font-medium">456 2314 523</Text>
            </View>
          </View>
          <View className="w-full mt-2">
            <View className="w-full py-2 flex-row items-center justify-between gap-4">
              <Text className="text-gray-400">Email</Text>
              <Text className="text-gray-800 font-medium">test@user.example</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default profile