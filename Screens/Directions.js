import React from 'react';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { Nav } from '../Components';
import {View} from 'react-native';

class Directions extends React.Component{


    static navigationOptions = {
        drawerLabel: 'Directions',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-navigate" size={20} color={tintColor}/>
        ),
      };


    state = {
        region:null,
    }

    async componentDidMount(){
         navigator.geolocation.getCurrentPosition(
            ({ coords:{latitude, longitude} }) => {
                this.setState({
                    region:{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }
                })
            },
            () => {},
            {
                timeout:2000,
                enableHighAccuracy:true,
                maximumAge:1000,
            }
        );
    }

    render(){

        const { region } = this.state;

        return(
            <View>
                <MapView
                style={{height:610}}
                region={region}
                showsUserLocation
            />
            <Nav
                onBackKeyPress = {()=>this.props.navigation.openDrawer()}
                rightOff
            />
            </View>
        )
    }
}







export default Directions;