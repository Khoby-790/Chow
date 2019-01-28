import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';
import Input from '../Components/Input';
import Button from '../Components/Button';


const ProductSelect = (props) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.productImage} source={require('../assets/Images/food.jpg')}/>
            <View style={styles.productDetails}>
                <Text style={styles.foodName}>Waakye</Text>
                <Text style={styles.owner}>John Doe</Text>
            </View>
            <View style={styles.qty}>
                <Input IconName="stats"/>
            </View>
            <View>
                <Button black name="Add to bag"/>
                <Button name="Proceed to Checkout"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        height:700,
        position:'relative',
        marginHorizontal:10,
        top:50,
    },
    productImage:{
        width:340,
        height:300,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        backgroundColor:'white',
    },
    productDetails:{
        backgroundColor:'white',
        height:70,
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between'
    },
    foodName:{
        fontFamily:'calibri',
        fontWeight:'bold',
        fontStyle:'normal',
        fontSize:20,
    },
    owner:{
        color:'#F0352B',
        fontWeight:'bold',
        fontSize:15,
    },
    qty:{
        backgroundColor:'white'
    }
})

export default ProductSelect