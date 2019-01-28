import React from 'react';
import { createAppContainer , createDrawerNavigator } from "react-navigation";
import {Posts,Profile,Settings,Directions} from '../Screens';
import {ScrollView ,ImageBackground} from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation';


const CustomDrawerContentComponent = (props) => (
    <SafeAreaView style={{flex:1}} forceInset={{ top: 'always', horizontal: 'never' }}>
      <ImageBackground source={require('../assets/Images/food.jpg')} style={{height:150}}>
          
      </ImageBackground>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );



const switchNav = createDrawerNavigator({
    Posts,
    Profile,
    Settings,
    Directions
},{
    contentComponent:CustomDrawerContentComponent
  });


export default createAppContainer(switchNav);





