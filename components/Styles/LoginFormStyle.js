import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window');

export default StyleSheet.create({
  container : {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#54545486',
    marginBottom: 20,
    height: 50,
    width: window.width - 60,
    color: '#fff'
  },
  heading:{
    color: '#c4c4c4',
    fontSize: 24,
    width: window.width - 60,
    borderBottomWidth: 3,
    borderBottomColor: '#407fff',
    marginBottom: 15,
    paddingBottom: 20,
    textAlign: 'center'
  },
});