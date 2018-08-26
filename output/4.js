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

import Group5Copy from './4_images/Group5Copy.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={styles._4}>
          <Image source={Group5Copy} style={styles.Group5Copy} />
          <Text style={styles.NameofBase}>Name of Base</Text>
          <View style={styles.RectangleCopy11}>
            <Text style={styles.AamirFamily}>#AamirFamily</Text>
          </View>
          <View style={styles.RectangleCopy5}>
            <Text style={styles.Confirm}>Confirm</Text>
          </View>
          <Text style={styles.Lookingtostartove}>
            <Text>Looking to start over?</Text>{'\n'}
            <Text></Text>{'\n'}
            <Text>Start Over</Text>{'\n'}
          </Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _4: {
    width: 272
  },
  Group5Copy: {
    alignSelf: 'center'
  },
  NameofBase: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center',
    marginTop: 85,
    textAlign: 'center'
  },
  RectangleCopy11: {
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
  AamirFamily: {
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
  Confirm: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9EBEB',
    textAlign: 'center'
  },
  Lookingtostartove: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'none',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  }
})
