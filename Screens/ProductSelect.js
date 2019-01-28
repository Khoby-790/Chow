import React from 'react';
import {View,ScrollView} from 'react-native';
import { ProductSelect as Product, NavBar } from "../Components";


class ProductSelect extends React.Component{


    _handleGoback = () =>{
        this.props.navigation.navigate("Posts")
      }

    render(){
        return(
            <View>
                <ScrollView>
                    <Product/>
                </ScrollView>
                    <NavBar onBackKeyPress ={()=>this._handleGoback()} backRed rightOff/>
            </View>
        )
    }
}




export default ProductSelect