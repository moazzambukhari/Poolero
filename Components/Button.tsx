import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export default function Button({ onPress, title }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <LinearGradient colors={['#9991f6', '#756aed']} style={styles.gradient}>
                    <Text style={styles.buttonText}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})