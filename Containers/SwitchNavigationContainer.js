import React from 'react';
import { createAppContainer , createSwitchNavigator } from "react-navigation";
import App from './InAppContainer';
import LoginRegisterTabs from './LoginRegistetContainer';
import {Forgot,Product} from '../Screens';
const switchNav = createSwitchNavigator({
    LoginRegisterTabs,
    App,
    Forgot,
    Product
    
});
    

export default createAppContainer(switchNav);
