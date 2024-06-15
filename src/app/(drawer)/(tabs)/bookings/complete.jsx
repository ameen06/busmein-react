import { SafeAreaView, ScrollView, View } from 'react-native'
import BookingNavBar from '../../../../components/bookingNavBar'
import TicketItem from '../../../../components/ticketItem'

const complete = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="pb-24">
        <View>
          <BookingNavBar />

          <View className="mt-8 px-4 space-y-4">
            <TicketItem />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default complete