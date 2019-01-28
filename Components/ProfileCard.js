import React from 'react';
import {StyleSheet , View, Text} from 'react-native';


const ProfileCard = (props) =>{
    return(
    <View style={styles.row}>
        <View style={styles.col}>
                <Text style={styles.name}>{props.name} : </Text>
        </View>
        <View style={styles.col_2}>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    row:{
        flex:1,
        flexDirection:'row',
        backgroundColor:"white",
        marginVertical:5,
        marginHorizontal:5,
        borderRadius:12,
    },
    col:{
        flex:1,
        justifyContent:'center',
        padding:20,
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
    },
    col_2:{
        flex:2,
        justifyContent:'center',
        padding:20,
    },
})

export default ProfileCard