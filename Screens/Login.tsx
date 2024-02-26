import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Button from '../Components/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = () => {
        console.log('email', email, 'password', password);
    }
    const handleSignup = () => {
        { navigation.navigate('SignUp') }
    }

    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/Logo.png')}
                />
            </View>
            <Text style={styles.heading1}>POOLERO</Text>

            <Text style={styles.heading2}>Welcome Back!</Text>

            <Text style={styles.link}>Don't Have Account?  <Text style={styles.link2} onPress={handleSignup}>Sign up now</Text></Text>

            <View style={styles.labelContainer}>
                {/* <Text style={styles.label}>Email</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor={'#000000'}
                    value={email}
                    placeholder="Enter your email"
                />
            </View>

            <View style={styles.labelContainer}>
                {/* <Text style={styles.label}>Password</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholderTextColor={'#000000'}
                    placeholder="Enter your password"
                    secureTextEntry={true} // for password fields
                />
            </View>

            <Button
                title='LogIn'
                onPress={handleLogin}
            />


            <View style={styles.textStyle}>
                <Text style={styles.seperate}>__ OR __ </Text>
            </View>

            <View style={styles.medialinksStyle}>
                <Text style={styles.mediaLinks}><Icon name="facebook" size={35} /></Text>
                <Text style={styles.mediaLinks}><Icon name="public" size={35} /></Text>
                <Text style={styles.mediaLinks}><Icon name="alternate-email" size={35} /></Text>
                <Text style={styles.mediaLinks}><Icon name="google" size={35} /></Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // marginTop: 32,
        paddingHorizontal: 24,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },

    input: {
        borderBottomWidth: 1,
        flex: 1,
        color: '#000',
    },
    link: {
        color: '#000',

    },
    link2: {
        color: '#9991f6',

    },
    tinyLogo: {
        width: '50%',
        height: 160,
    },
    ImageContainer: {
        width: '100%',
        // borderWidth: 1,
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically

    },

    heading1: {
        color: '#0E056B',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    heading2: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 36,
    },
    textStyle: {
        alignItems: 'center',
    },
    seperate: {
        marginTop: 20,
        fontSize: 20,
        color: '#50565a',
    },
    mediaLinks: {
        marginTop: 20,
        color: '#50565a',
    },
    medialinksStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
