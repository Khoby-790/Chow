import React from 'react';
import { View,StyleSheet,Image,TouchableOpacity,Text } from 'react-native';



const ListItem = (props) =>{
    return (
        <View style={styles.container}>
            <Image style={styles.foodImage} source={require('../assets/Images/food.jpg')}/>
            <View style={styles.CardMeta}>
                <Text style={styles.foodName}>Waakye</Text>
                <Text style={styles.owner}>John Doe</Text>
            </View>
            <TouchableOpacity 
            onPress = {props.onSelect}
            style={styles.cardDetails}>
                <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:340,
        height:300,
        flexDirection:'column',
        marginHorizontal:10,
        marginVertical:10,
        zIndex:2,
    },
    foodImage:{
        height:200,
        width:340,
        borderRadius:5,
    },
    CardMeta:{
        height:50,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    foodName:{
        fontFamily:'calibri',
        fontWeight:'bold',
        fontStyle:'normal',
        fontSize:20,
    },
    cardDetails:{
        backgroundColor:"#F0352B",
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12,
    },
    viewText:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    owner:{
        color:'#F0352B',
        fontWeight:'bold',
        fontSize:15,
    }
});



export default ListItem