import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { Nav,Input,Button,Logo,Reminder } from "../Components";

class ForgotPassword extends React.Component{


    _handleGoback = () =>{
        this.props.navigation.navigate("LoginRegisterTabs");
    }

    

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topDiv}>
                    <Logo/>
                </View>
                <View style={styles.downDiv}>
                    <Input
                        IconName="at"
                        Placeholder="Email eg. johndoe@domain.com"
                    />
                    <Button 
                    name="Submit"/>
                    <Reminder name="Forgot Password ?" />
                </View>
                <Nav rightOff
                backRed
                onBackKeyPress={()=>this._handleGoback()}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    topDiv:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    downDiv:{
        flex:2,
        alignItems:"center",
        justifyContent:"center",
    }
});


export default ForgotPassword;


