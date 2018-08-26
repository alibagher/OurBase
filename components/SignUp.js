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
        paddingTop: 120,
        backgroundColor: '#ffffff'}}>
        
          <Image source={logo} style={styles.logo} />
          
          <Text style={styles.SignUp}>Sign Up</Text>
          
          
          <View style={styles.E_mail}>
            <TextInput 
              keyboardType={"email-address"}
              placeholder="E-Mail"
              placeholderTextColor="#ceb381"
              style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.UserN}>
            <TextInput 
              keyboardType={"default"}
              placeholder="UserName"
              placeholderTextColor="#ceb381"
              style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <View style={styles.Pass}>
            <TextInput 
              keyboardType={"default"}
              placeholder="UserName"
              placeholderTextColor="#ceb381"
              style={{height: 50, width: 275, borderRadius: 10, paddingLeft: 20}}
              onChangeText={(text) => this.setState({text})}
            />
          </View>

          <TouchableOpacity style={styles.RectangleCopy5}>
            <Text style={styles.Done}>Done!</Text>
          </TouchableOpacity>

          <Text style={styles.Alreadyhaveabase}>
            <Text>Already have a base? </Text>{'\n'}
            <TouchableOpacity
              onPress={() => 
                this.props.navigation.navigate('LoginNav')
              }
              >
              <Text style={styles.Lookingtogetupaa}>Sign In</Text>
            </TouchableOpacity>{'\n'}
          </Text>
        
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
  E_mail: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 13,
    fontSize: 18,
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Email: {
  //   backgroundColor: 'transparent',
  //   fontSize: 18,
  //   fontWeight: 'normal',
  //   color: '#CEB381',
  //   textAlign: 'left',
  //   marginLeft: 25
  // },
  UserN: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 7,
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // UsernameCopy: {
  //   backgroundColor: 'transparent',
  //   fontSize: 18,
  //   fontWeight: 'normal',
  //   color: '#CEB381',
  //   textAlign: 'left',
  //   marginLeft: 25
  // },
  Pass: {
    height: 47,
    backgroundColor: '#FFF6E5',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 7,
    width: 262,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // PasswordCopy: {
  //   backgroundColor: 'transparent',
  //   fontSize: 18,
  //   fontWeight: 'normal',
  //   color: '#CEB381',
  //   textAlign: 'left',
  //   marginLeft: 25
  // },
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
    color: 'black',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  },
  Lookingtogetupaa: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 9,
    textDecorationLine: 'underline'
  }
})
