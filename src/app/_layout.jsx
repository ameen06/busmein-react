import { Stack, Tabs } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind"
import TabBar from "../components/TabBar"

NativeWindStyleSheet.setOutput({
  default: "native",
});

const RootLayout = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="bookings" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  )
}

export default RootLayout