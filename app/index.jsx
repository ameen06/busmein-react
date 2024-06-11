import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex items-center justify-center">
      <Text className="text-2xl font-bold text-green-500">Hello World!</Text>
      <Link href="pages/auth/login">Login</Link>
      <StatusBar style="auto" />
    </View>
  );
}