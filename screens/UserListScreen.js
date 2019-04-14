import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import UserList from '../components/UserList';
import styles from './Styles/UserScreenStyle';

export default class UserListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  static navigationOptions = {
    title: 'User list',
    headerStyle: {backgroundColor: '#2c3e50'},
    headerTintColor: '#c4c4c4',
    headerTitleStyle: {fontWeight: 'bold'}
  };

  async componentDidMount() {
    await this._getUsers();
  }

  _getUsers = async () => {
    const users = await this.props.navigation.getParam('users', []);
    this.setState({users});
  };

  render() {
    return <View style={ styles.container }>
      {
        this.state.users.length ?
          <UserList
            navigation={this.props.navigation}
            users={this.props.navigation.getParam('users', [])}
          /> : null
      }
    </View>
  }
}