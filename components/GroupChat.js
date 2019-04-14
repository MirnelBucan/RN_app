import React, { Component } from 'react';
import { ScrollView, AsyncStorage, Text , TouchableOpacity } from 'react-native';

import styles from './Styles/GroupChatStyle';
import api from '../utils/api';

export default class GroupChat extends Component {
  constructor (props){
    super(props);
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    this._getMessages();
  }
  _getMessages = async () => {
    try{
      const token = await AsyncStorage.getItem('token');
      const { data } = await api.get('/message/all',{ headers: { 'Authorization': `Bearer ${token}` }});
      this.setState({messages: data.messages});
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  render(){
    return(
        <ScrollView>
          {
            this.state.messages.length ? this.state.messages.map((item, index) => (
              <TouchableOpacity
                key = {index}
                style = {styles.container}
              >
                  <Text style = {styles.text}>
                    { item.messages.user.username }: { item.messages.content }
                  </Text>
              </TouchableOpacity>
            )) : <Text style = { styles.text }>No message to display</Text>
          }
        </ScrollView>
    );
  }
}