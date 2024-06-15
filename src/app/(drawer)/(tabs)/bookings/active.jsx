import { SafeAreaView, ScrollView, View } from 'react-native'
import BookingNavBar from '../../../../components/bookingNavBar'
import TicketItem from '../../../../components/ticketItem'

const active = () => {
  return (
    <SafeAreaView className="m-0">
      <ScrollView className="m-0 pb-24">
        <View>
          <BookingNavBar />

          <View className="mt-8 px-4 space-y-4">
            <TicketItem />
            <TicketItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default active