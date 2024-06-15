import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer'

const AppLayout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{headerShown: false}} />
    </GestureHandlerRootView>
  )
}

export default AppLayout