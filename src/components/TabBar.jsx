import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { HomeIcon, TicketIcon, UserIcon } from "react-native-heroicons/outline"

const TabBar = ({ state, descriptors, navigation }) => {

  const icons = {
    index: (props) => <HomeIcon size={20} strokeWidth={2} color={'#FFFFFF'} {...props} />,
    bookings: (props) => <TicketIcon size={20} strokeWidth={2} color={'#FFFFFF'} {...props} />,
    profile: (props) => <UserIcon size={20} strokeWidth={2} color={'#FFFFFF'} {...props} />,
  }

  return (
    <View style={styles.tabbarContainer}>
      <View style={styles.tabbar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          if(['_sitemap','+not-found','auth'].includes(route.name)) return null

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tabbarItem, isFocused ? styles.tabbarItemFocus : null]}
              key={index}
            >
              {
                icons[label]({
                  color: isFocused ? '#1e40af' : '#FFFFFF' 
                })
              }
              {isFocused ? (
                <Text style={{ color: isFocused ? '#1e40af' : '#FFFFFF', fontWeight: 600, textTransform: 'capitalize' }}>
                  {label}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  )
}
export default TabBar

const styles = StyleSheet.create({
  tabbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    padding: 6,
    position: 'absolute',
    bottom: 25,
    width: '100%',
    maxWidth: '280px',
    marginHorizontal: 40,
    backgroundColor: '#1e40af',
    borderRadius: 50,
    borderCurve: 'continuous',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: '0.1',
  },
  tabbarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 50,
    backgroundColor: '#1e40af',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabbarItemFocus: {
    backgroundColor: '#FFFFFF',
  }
})