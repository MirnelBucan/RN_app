import React, { Component } from 'react';
import { Alert, StyleSheet, AsyncStorage,
  Dimensions, TouchableOpacity, View,
  Text } from 'react-native';
//import   from 'react-native-maps';
import { MapView, Location, Permissions ,Constants} from 'expo';
let { width, height } = Dimensions.get('window');

import styles from './Styles/MapStyle';

import api from '../utils/api';
export default class MyMap extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapRegion: {
        "latitude": 43.842672516410985,
        "latitudeDelta": 0.17092388485219345,
        "longitude": 18.376443441957235,
        "longitudeDelta": 0.1895882561802864,

      },
      locationResult: null,
      location: { coords: { latitude: 37.78825, longitude: -122.4324 } },
      otherUsers: []
    }
  };
  componentDidMount() {
    this._getLocationAsync();
    this._getOtherUsersLocation();

  };

  _handleMapRegionChange = mapRegion =>{
    this.setState({mapRegion});
  };

  _getLocationAsync = async () => {
    try{
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          locationResult: 'Permission to access location was denied',
          location
        });
      }

    }catch (err) {
      console.log('Permision ERR: ',err);
      Alert.alert('Please check if your location is turned on');
    }
    try{
    let location = await Location.getCurrentPositionAsync({});
    this.setState({locationResult:JSON.stringify(location), location});
    await this._updateUserLocation(location);
    } catch (err) {
      console.log("Error: ",err);
      Alert.alert('Unable to get your location, please check if your location is turned on');
    }

  };
  _updateUserLocation = async (location) => {
    try{
      const token = await AsyncStorage.getItem('token');
      await api.put('/user/location',{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      },
      { headers: { 'Authorization': `Bearer ${token}` } });
    } catch(err) {
      console.log(err.response.data);
    }
  };
  _getOtherUsersLocation = async () => {
    try{
      const token = await AsyncStorage.getItem('token');
      const result = await api.get('/user/all',{ headers: { 'Authorization': `Bearer ${token}` }});
      this.setState({ otherUsers: result.data.users });
    } catch (err){
      console.log("Error map");
      console.log(err.response.status);
      console.log(err.response.data);
    }
  };
  _usersList = () => {
    this.props.navigation.navigate('UserList',{
      users: this.state.otherUsers
    })
  };

  _groupChat = () => {
    this.props.navigation.navigate('GroupChat')
  };

  render(){
    return (
      <View style={ styles.container }>
        <View style={ styles.innerContainerButtons }>
          <TouchableOpacity
            style={styles.button}
            onPress={this._usersList.bind(this)}
          >
            <Text> Users list </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this._groupChat.bind(this)}
          >
            <Text> Group chat </Text>
          </TouchableOpacity>
        </View>
      <MapView
        style={{alignSelf: 'stretch', height: height - 20, width}}
        initialRegion={ this.state.mapRegion }
        onRegionChange={ this._handleMapRegionChange }
        loadingEnabled = { true }
        followuserLocation={ true }
        showsMyLocationButton={ true }
        zoomEnabled={true}
      >
        { this.state.location ?
          <MapView.Marker
            coordinate={ this.state.location.coords  }
            title="Me"
          /> : null
        }
        {
          this.state.otherUsers.length ?
            this.state.otherUsers.map( element =>
               <MapView.Marker
                key = { element.user.id }
                coordinate={ element.coords }
                title={ element.user.username }/> )
            : undefined
        }
      </MapView>
      </View>
    )
  }
}