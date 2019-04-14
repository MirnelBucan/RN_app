import React, { Component } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import RegisterForm from '../components/RegisterForm';
import style from './Styles/RegisterScreenStyle';

export default class RegisterScreen extends React.Component {
  constructor(props){
    super(props)
  }
  static navigationOptions = {
    title: 'Register',
    headerStyle:{ backgroundColor: '#2c3e50' },
    headerTintColor: '#c4c4c4',
    headerTitleStyle: { fontWeight: 'bold' }
  };
  render() {
    return (

      <KeyboardAvoidingView
        style={ style.container}
        behavior={ 'padding' }
        enabled
      >
          <RegisterForm
            navigation={this.props.navigation}
          />
      </KeyboardAvoidingView>
    );
  }
}