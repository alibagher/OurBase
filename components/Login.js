import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import Group5 from '../images/Group5.png'

export default class Login extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 100,
        backgroundColor: '#79DBDE'}}>
        <View style={styles.Rectangle2}>
          
          <Image source={Group5} style={styles.Group5} />
          <Text style={styles.SignIn}>Sign In</Text>
          <View style={{padding: 5, alignItems:'center'}}>
                    <TextInput
                        placeholder="UserName"
                        placeholderTextColor="#ceb381"
                        backgroundColor="#fff6e5"
                        style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <View style={{padding: 5, alignItems:'center'}} >
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#ceb381"
                        backgroundColor="#fff6e5"
                        style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
          <TouchableOpacity style={styles.RectangleCopy4}>
            <Text style={styles.LetsGo}>Let’s Go!</Text>
          </TouchableOpacity>
          <Text style={styles.Lookingtogetupa}>
            <Text>Looking to get up a base? </Text>
            <TouchableOpacity
              onPress={() => 
                this.props.navigation.navigate('SignUpNav')
              }
              >
              <Text style={styles.Lookingtogetupaa}>Sign Up!</Text>
            </TouchableOpacity>{'\n'}
          </Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Rectangle2: {
    height: 667,
    backgroundColor: '#79DBDE',
    paddingTop: 5,
    paddingBottom: 190
  },
  BarsStatusWhite: {
    alignSelf: 'center',
    height: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  OverridesStatusBarSignalWhite: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Carrier: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  MobileSignal: {

  },
  Wifi: {

  },
  PinRight: {
    width: 71,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  Battery: {
    width: 60,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  _100: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left'
  },
  Time: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  Group5: {
    alignSelf: 'center',
    marginTop: 78
  },
  SignIn: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center',
    marginTop: 85,
    textAlign: 'center'
  },
  RectangleCopy6: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 13,
    width: 262,
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'center'
  },
  Username: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#CEB381',
    textAlign: 'left',
    marginLeft: 25
  },
  RectangleCopy7: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 7,
    width: 262,
    alignItems: 'flex-start',
    marginLeft: 25,
    justifyContent: 'center'
  },
  Password: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#CEB381',
    textAlign: 'left',
    marginLeft: 25
  },
  RectangleCopy4: {
    height: 47,
    backgroundColor: '#F9736F',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 26,
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LetsGo: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9EBEB',
    textAlign: 'center'
  },
  Lookingtogetupa: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  },
  Lookingtogetupaa: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center',
    textDecorationLine: 'underline'
  }
})
