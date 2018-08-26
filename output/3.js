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

import Group5Copy from './3_images/Group5Copy.png'
import Group from './3_images/Group.png'

export default class Main extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={styles._3}>
          <Image source={Group5Copy} style={styles.Group5Copy} />
          <Text style={styles.ConfirmEmail}>Confirm E-mail</Text>
          <Image source={Group} style={styles.Group} />
          <View style={styles.RectangleCopy5}>
            <Text style={styles.Confirm}>Confirm</Text>
          </View>
          <Text style={styles.ltBack}>
            <Text></Text>{'\n'}
            <Text>&lt; Back</Text>{'\n'}
          </Text>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  _3: {
    width: 272
  },
  Group5Copy: {
    alignSelf: 'center'
  },
  ConfirmEmail: {
    backgroundColor: 'transparent',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center',
    marginTop: 85,
    textAlign: 'center'
  },
  Group: {
    alignSelf: 'center',
    marginTop: 13
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
  ltBack: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#79DBDE',
    alignSelf: 'center',
    marginTop: 9,
    textAlign: 'center'
  }
})
