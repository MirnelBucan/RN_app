import React, { Component } from 'react';
import { Button } from 'react-native';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button
      title="Login"
      onPress={() => this.props.userLogin() }
    />;
  }
}
