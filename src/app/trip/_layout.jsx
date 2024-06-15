import { Stack } from 'expo-router'

const ListingLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false, headerStyle: {
      backgroundColor: '#eab308',
    },headerTintColor: '#15803d',
    headerTitleStyle: {
      fontWeight: 'bold',
    },}}>
      <Stack.Screen name="boarding" options={{ headerShown:false }} />
      <Stack.Screen name="listing" options={{ headerShown:false }} />
      <Stack.Screen name="seats" options={{ headerShown:false }} />
      <Stack.Screen name="dropping" options={{ headerShown:false }} />
    </Stack>
  )
}

export default ListingLayout