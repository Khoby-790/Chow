import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';


import { Input, Button,Logo } from "../Components";





class Register extends React.Component{


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topDiv}>
                    <Logo/>
                </View>
                <View style={styles.downDiv}>
                    <Input
                        IconName="person"
                        Placeholder="Name eg. John Doe"
                    />
                    <Input
                        IconName="at"
                        Placeholder="Email eg. johndoe@domain.com"
                    />
                    <Input
                        IconName="lock"
                        Secure={true}
                        Placeholder="Password eg. ######"
                    />
                    <Button name="Register"/>
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


export default Register;




