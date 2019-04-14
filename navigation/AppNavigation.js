import { createStackNavigator, createAppContainer } from 'react-navigation';
  
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import UserListScreen from '../screens/UserListScreen';
import GroupChatScreen from '../screens/GroupChatScreen';

const RootStack = createStackNavigator(
  {  
      Home: HomeScreen,
      Login: LoginScreen,
      Register: RegisterScreen,
      UserList: UserListScreen,
      GroupChat: GroupChatScreen
  },
  {  
      initialRouteName: "Login"
  }  
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer