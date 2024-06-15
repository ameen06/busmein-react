// import { Stack } from 'expo-router/stack'
import { NativeWindStyleSheet } from "nativewind"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivePage from './active'
import CompletePage from './complete'
import CancelledPage from './cancelled'
import TicketPage from './ticket'
import { NavigationContainer } from '@react-navigation/native';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const BookingLayout = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF',
        },
        headerTitleStyle: {
          fontWeight: '800',
          color: '#1e40af',
        },
    }}>
      <Stack.Screen name="active" options={{title: 'My Bookings'}} component={ActivePage} />
      <Stack.Screen name="complete" options={{title: 'My Bookings'}} component={CompletePage} />
      <Stack.Screen name="cancelled" options={{title: 'My Bookings'}} component={CancelledPage} />
      <Stack.Screen name="ticket" options={{title: 'Ticket Details'}} component={TicketPage} />
    </Stack.Navigator>
  )
}

export default BookingLayout