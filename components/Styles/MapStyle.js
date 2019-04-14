import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    flex:1
  },
  innerContainerButtons: {
    flexWrap:'wrap',
    flexDirection:'row',
    width ,
    alignSelf: 'stretch'
  }
});