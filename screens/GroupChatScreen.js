import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

import GroupChat from '../components/GroupChat';
import styles from './Styles/GroupChatScreenStyle';

export default class GroupChatScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  static navigationOptions = {
    title: 'Group chat',
    headerStyle: {backgroundColor: '#2c3e50'},
    headerTintColor: '#c4c4c4',
    headerTitleStyle: {fontWeight: 'bold'}
  };
/* In case of message passing ( probably redundant)
  async componentDidMount() {
    await this._getUsers();
  }

  _getUsers = async () => {
    const users = await this.props.navigation.getParam('users', []);
    this.setState({users});
  };
*/
  render() {
    return <View style={ styles.container }>
          <GroupChat />
    </View>
  }
}