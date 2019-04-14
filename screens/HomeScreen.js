import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './Styles/HomeScreenStyle';

import MyMap from '../components/Map';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);

  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#2c3e50'
    },
    headerTintColor: '#c4c4c4',
  }
  render() {
    return (
        <MyMap
          navigation = {this.props.navigation}
        />
    );
  }
}
