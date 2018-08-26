//login

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#79dbde", 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signIn: {
        color: "#636363",
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 28,
    },
    base: {
        color: "#636363",
        marginTop: 10,
        fontSize: 12,
    },
    signUp: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    }

})

export default class Login extends Component {
    render () {
        return (
            <View style={styles.container}> 
                <Image 
                    style={{
                        width: 300,
                        height: 60,
                        marginBottom: 65,
                        resizeMode: Image.resizeMode.contain,
                        }}
                        source={require('../images/logo.png')} 
                    />

                <Text style={styles.signIn}>Sign In</Text>


                <View style={{padding: 5}}>
                    <TextInput
                        placeholder="UserName"
                        placeholderTextColor="#ceb381"
                        backgroundColor="#fff6e5"
                        style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={{padding: 5}} >
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#ceb381"
                        backgroundColor="#fff6e5"
                        style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                <View style={{marginTop: 25, padding: 5, backgroundColor: "#f9736f", height: 50, width: 275, borderRadius: 10}} >
                <Button
                    onPress={() => {
                      Alert.alert('You tapped me again!');
                    }}
                    color="#ffffff"
                    style={{height: 50, width: 275, borderRadius: 10}}
                    title="Let's Go!"
                />
                </View>

                <Text style={styles.base}>Looking to get a base? </Text>
                <TouchableOpacity
                    style={styles.loginScreenButton}
                    onPress={() => navigate('HomeScreen')}
                    underlayColor='#fff'>
                        <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>

            </View> 
        )
    }
}