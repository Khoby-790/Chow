import React from 'react';
import {View,TextInput,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

const Input = (props) =>{
    return(
        <View style={styles.input}>
            <TextInput style={styles.inputTag} 
                secureTextEntry={props.Secure}
                placeholder={props.Placeholder}
                {...props}
            />
            <View style={styles.icon}>
                <Icon 
                    name={`md-` + props.IconName}
                    color={props.IconColor}
                    size={25}
                />
            </View>
        </View>
    )
}

export default Input;


const styles = StyleSheet.create({
    input:{
        flexDirection:"row",
        marginHorizontal:10,
        marginVertical:10,
        justifyContent:'center',
    },
    inputTag:{
        height:50,
        width:250,
        paddingLeft:15,
        backgroundColor:"#cecece",
        borderBottomLeftRadius:8,
        borderTopLeftRadius:8,
        fontWeight:"bold",
    },
    icon:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#cecece",
        width:50,
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
    }
})