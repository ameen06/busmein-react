import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const MainButton = ({title, callback, loading = false, disabled = false}) => {
    return (
        <TouchableOpacity onPress={callback} style={styles.button} disabled={disabled}>
            <Text style={styles.text}>{ loading ? "Loading..." : title }</Text>
        </TouchableOpacity>
    )
}

export default MainButton

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: "#1e40af",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginTop: 16,
        width: '100%',
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFFFFF",
        textTransform: 'uppercase',
    }
})