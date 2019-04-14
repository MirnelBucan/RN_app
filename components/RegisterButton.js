import React, { Component } from 'react';
import { Button } from 'react-native';

export default class RegisterButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button
      title="Register"
      onPress={() => this.props.userRegister() }
    />;
  }
}
