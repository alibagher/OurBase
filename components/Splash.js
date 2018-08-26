// splash page before login

import React, { Component } from 'react';
import { StyleSheet, Image, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#79dbde", 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,

    }
})

export default class Splash extends Component {
    render () {
        return (
            <View style={styles.container}> 
                <Image
                    style={{
                        width: 90,
                      height: 90,
                        resizeMode: Image.resizeMode.contain,
                    }}
                    source={require('../images/house.png')} 
                />
               
            </View> 
        )
    }
}