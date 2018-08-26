/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    //console.log('Hello world');
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import { createStackNavigator } from 'react-navigation';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';
import SignUp from './components/SignUp';


console.disableYellowBox = true;

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash' };
    setTimeout(()=>{
      this.setState({ currentScreen: 'Login' })
    }, 500)
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
    return mainScreen
  }
}

export default createStackNavigator({
  LoginNav: { screen: Login },
  SignUpNav: { screen: SignUp },
});


AppRegistry.registerComponent('OurBase', () => App);