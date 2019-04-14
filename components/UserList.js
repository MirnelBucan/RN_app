import React, { Component } from 'react';
import { ScrollView, View, Text , TouchableOpacity } from 'react-native';

import styles from './Styles/UserListStyle';

export default class UserList extends Component {
  constructor (props){
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.setState({ users: this.props.users})
  }

  render(){
    return(
      <ScrollView>
        {
          this.state.users.length ? this.state.users.map((item, index) => (
            <TouchableOpacity
              key = {index}
              style = {styles.container}
            >
              <Text style = {styles.text}>
                {item.user.username}
              </Text>
            </TouchableOpacity>
          )) : undefined
        }
      </ScrollView>
    );
  }
}