import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Login,Register } from "../Screens";
import Icon from 'react-native-vector-icons/Ionicons';

const tabNav = createBottomTabNavigator({
    Login:Login,
    Register:Register
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Login') {
        iconName = 'md-person'
      } else if (routeName === 'Register') {
        iconName = 'md-person-add';
      }
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#F0352B',
    inactiveTintColor: 'gray',
  }}
  );



export default createAppContainer(tabNav);

