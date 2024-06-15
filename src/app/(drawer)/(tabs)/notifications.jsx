import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

const notifications = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ 
            headerStyle: {
            backgroundColor: '#FFFFFF',
            },
                headerTitleStyle: {
                fontWeight: '800',
                color: '#1e40af',
            },
            title: 'Notifications'
        });
    }, [navigation]);
    
    return (
        <View className="p-6">
            <Text>No Notifications</Text>
        </View>
    )
}

export default notifications

const styles = StyleSheet.create({})