import React, { Component } from 'react';
import { KeyboardAvoidingView, Button, ScrollView,View } from 'react-native';

import LoginForm from '../components/LoginForm';
import style from './Styles/LoginScreenStyle';

export default class LoginScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Login',
    headerStyle:{ backgroundColor: '#2c3e50' },
    headerTintColor: '#c4c4c4',
    headerTitleStyle: { fontWeight: 'bold' }
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={ style.container }
        behavior='padding'
      >
        <ScrollView >
          <View style={ style.container }>
          <LoginForm navigation={this.props.navigation} />
          <Button
            style={ { width:60, backgroundColor: '#c4c4c4' } }
            title={ 'Register' }
            onPress={() => this.props.navigation.navigate('Register')} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}