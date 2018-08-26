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

import logo from '../images/SignUp_images/logo_dark.png'

export default class SignUp extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={{width: 272, alignItems:'center'}}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.SignUp}>Sign Up</Text>
          <View style={styles.RectangleCopy10}>
            <Text style={styles.Email}>E-mail</Text>
          </View>
          <View style={styles.RectangleCopy8}>
            <Text style={styles.UsernameCopy}>Username</Text>
          </View>
          <View style={styles.RectangleCopy9}>
            <Text style={styles.PasswordCopy}>Password</Text>
          </View>
          <View style={styles.RectangleCopy5}>
            <Text style={styles.Done}>Done!</Text>
          </View>
          <Text style={styles.Alreadyhaveabase}>
            <Text>Already have a base? </Text>{'\n'}
            <Text>Sign In</Text>{'\n'}
          </Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center'
  },
  SignUp: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center',
    marginTop: 85,
    textAlign: 'center'
  },
  RectangleCopy10: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 13,
    width: 262,
    alignItems: 'center',
    marginLeft: 25,
    justifyContent: 'center'
  },
  Email: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#CEB381',
    textAlign: 'left',
    marginLeft: 25
  },
  RectangleCopy8: {
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
  UsernameCopy: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#CEB381',
    textAlign: 'left',
    marginLeft: 25
  },
  RectangleCopy9: {
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
  PasswordCopy: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#CEB381',
    textAlign: 'left',
    marginLeft: 25
  },
  RectangleCopy5: {
    height: 47,
    backgroundColor: '#F9736F',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 26,
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Done: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9EBEB',
    textAlign: 'center'
  },
  Alreadyhaveabase: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  }
})
