import { Link } from 'expo-router';
import { Text, View, SafeAreaView, ScrollView, TextInput, Pressable } from 'react-native';
import { BellIcon, Bars3Icon, CalendarDaysIcon } from "react-native-heroicons/outline"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import MainButton from '../components/button'

export default function App() {
  // pickup date
  const [pickupDate, setPickupDate] = useState(new Date())
  const [boardingDate, setBoardingDate] = useState(new Date().toDateString())
  const [showBoardingDatePicker, setShowBoardingDatePicker] = useState(false)
  // dropping date
  const [dropDate, setDropDate] = useState(new Date())
  const [droppingDate, setDroppingDate] = useState(new Date().toDateString())
  const [showDroppingDatePicker, setShowDroppingDatePicker] = useState(false)

  const [searchingBuses, setSearchingBuses] = useState(false)
  const [tripType, setTripType] = useState('single')

  // boarding date
  const toggleBoardingDatePicker = () => {
    setShowBoardingDatePicker(!showDatePicker)
  }
  const boardingDateChanged = ({type}, date) => {
    if(type == "set"){
      setPickupDate(date)
      setBoardingDate(date.toDateString())
    }
    toggleBoardingDatePicker()
  }

  // dropping date
  const toggleDroppingDatePicker = () => {
    setShowDroppingDatePicker(!showDroppingDatePicker)
  }
  const droppingDateChanged = ({type}, date) => {
    if(type == "set"){
      setDropDate(date)
      setDroppingDate(date.toDateString())
    }
    toggleDroppingDatePicker()
  }

  // search bus
  const searchBus = () => {
    setSearchingBuses(true)
    setTimeout(() => {
      setSearchingBuses(false)
    }, 3000);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="pb-24 pt-10">
        <View className="px-8 py-4 bg-blue-800 flex-row items-center justify-between gap-4">
          <Link href={'/'}>
            <Bars3Icon size={30} strokeWidth={2} color={'#FFFFFF'} />,
          </Link>
          <Link href={'/profile'}>
            <BellIcon size={20} strokeWidth={2} color={'#FFFFFF'} />,
          </Link>
        </View>

        <View className="relative">
          <View className="h-[35vh] absolute top-0 left-0 right-0 bg-blue-800" style={{borderBottomEndRadius: 60, borderBottomStartRadius: 60}}></View>

          <View className="items-center px-8">
            <Text className="mt-4 text-lg font-bold text-white text-center">Book Your Bus Ticket</Text>

            <View className="w-full max-w-sm mt-6 rounded-2xl bg-white shadow-xl shadow-black px-4 py-7">
              {/* boarding point */}
              <View className="w-full flex-row items-center bg-slate-200 p-2.5 rounded-lg focus:border-2 focus:border-blue-500">
                <View className="flex-row items-center pr-1 border-r border-gray-500">
                  <FontAwesome5 name="bus" size={22} color="#1e40af" />
                  <MaterialIcons name="directions-walk" size={18} color="#1e40af" style={{transform: 'scaleX(-1)'}} />
                </View>

                <TextInput className="flex-1 pl-2 bg-slate-200 text-gray-900 text-sm" placeholder="Pickup Location" placeholderTextColor={'#475569'} required />
              </View>
              {/* droppoing point */}
              <View className="w-full mt-4 flex-row items-center bg-slate-200 p-2.5 rounded-lg focus:border-2 focus:border-blue-500">
                <View className="flex-row items-center pr-1 border-r border-gray-500">
                  <FontAwesome5 name="bus" size={22} color="#1e40af" />
                  <MaterialIcons name="directions-walk" size={18} color="#1e40af" />
                </View>

                <TextInput className="flex-1 pl-2 bg-slate-200 text-gray-900 text-sm" placeholder="Dropping Location" placeholderTextColor={'#475569'} required />
              </View>

              {/* boarding date */}
              {showBoardingDatePicker ? (
                <View>
                  <DateTimePicker
                    value={pickupDate}
                    mode="date"
                    is24Hour={true}
                    display="spinner"
                    onChange={boardingDateChanged}
                    minimumDate={new Date()}
                  />
                </View>
              ) : (
                <Pressable onPress={toggleBoardingDatePicker} className="w-full mt-4 flex-row items-center bg-slate-200 p-2.5 rounded-lg focus:border-2 focus:border-blue-500">
                  <View className="flex-row items-center pl-2 pr-3 border-r border-gray-500">
                    <CalendarDaysIcon size={22} strokeWidth={2} color={'#1e40af'}/>
                  </View>

                  <TextInput className="flex-1 pl-2 bg-slate-200 text-gray-900 text-sm" value={boardingDate} placeholder="Choose Date" placeholderTextColor={'#475569'} required editable={false} onPress={toggleBoardingDatePicker} />
                </Pressable>
              )}

              {/* type */}
              <View className="w-full mt-4 flex-1 flex-row items-center justify-center space-x-4">
                <Pressable onPress={()=>setTripType('single')} className={`flex-1 rounded-xl px-4 py-2 focus:outline-none ${tripType == 'single' ? "bg-blue-800" : "bg-slate-100 border border-gray-200"}`}>
                  <Text className={`font-medium text-center text-sm ${tripType == 'single' ? 'text-white' : 'text-black'}`}>One Way</Text>
                </Pressable>
                <Pressable onPress={()=>setTripType('round')} className={`flex-1 rounded-xl px-4 py-2 focus:outline-none ${tripType == 'round' ? "bg-blue-800" : "bg-slate-100 border border-gray-200"}`}>
                  <Text className={`font-medium text-center text-sm ${tripType == 'round' ? 'text-white' : 'text-black'}`}>Round Trip</Text>
                </Pressable>
              </View>

              {/* dropping date */}
              { tripType == "round" && (
                showDroppingDatePicker ? (
                  <View>
                    <DateTimePicker
                      value={dropDate}
                      mode="date"
                      is24Hour={true}
                      display="spinner"
                      onChange={droppingDateChanged}
                      minimumDate={new Date()}
                    />
                  </View>
                ) : (
                  <Pressable onPress={toggleDroppingDatePicker} className="w-full mt-4 flex-row items-center bg-slate-200 p-2.5 rounded-lg focus:border-2 focus:border-blue-500">
                    <View className="flex-row items-center pl-2 pr-3 border-r border-gray-500">
                      <CalendarDaysIcon size={22} strokeWidth={2} color={'#1e40af'}/>
                    </View>
  
                    <TextInput className="flex-1 pl-2 bg-slate-200 text-gray-900 text-sm" value={droppingDate} placeholder="Choose Return Date" placeholderTextColor={'#475569'} required editable={false} onPress={toggleDroppingDatePicker} />
                  </Pressable>
                )
              )}

              {/* submit btn */}
              <MainButton title="Search Buses" callback={searchBus} loading={searchingBuses} disabled={searchingBuses} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}