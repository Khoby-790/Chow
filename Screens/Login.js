import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Input,Button,Logo,Reminder, } from "../Components";

class Login extends React.Component{


    _handleLogin = () =>{
        this.props.navigation.navigate("Posts");
    }

    _handleForgot = () =>{
        this.props.navigation.navigate("Forgot");
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
                    <Input
                        IconName="lock"
                        Secure={true}
                        Placeholder="Password"
                    />
                    <Button 
                    onPress = {() => this._handleLogin()}
                    name="Login"/>
                    <Reminder 
                    onSubmit = {()=>this._handleForgot()}
                    name="Forgot Password ?" />
                </View>
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


export default Login;


