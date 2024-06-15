import { Stack } from 'expo-router'
import { NativeWindStyleSheet } from "nativewind"

NativeWindStyleSheet.setOutput({
  default: "native",
});

const BookingLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontWeight: '800',
          color: '#1e40af',
        },
    }}>
      <Stack.Screen name="active" options={{title: 'My Bookings'}} />
      <Stack.Screen name="complete" options={{title: 'My Bookings'}} />
      <Stack.Screen name="cancelled" options={{title: 'My Bookings'}} />
      <Stack.Screen name="ticket" options={{title: 'Ticket Details'}} />
    </Stack>
  )
}

export default BookingLayout