import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
// import Home2 from '../screens/Home2';
// import Profile2 from '../screens/Profile2';
import Register from '../screens/Register';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import ListingScreen from '../screens/ListingScreen';
import ShowScreen from '../screens/ShowScreen';
import AddScreen from '../screens/AddScreen';
import { BlogProvider } from '../screens/DataHouse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { readData } from '../screens/asyn-storage/LoginSession';
const Stack = createNativeStackNavigator();

class MainNavigation extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,

        }
    }
    componentDidMount() {
        readData().then(x => {
            if (x) {
                this.setState({ isLogin: true })
            } else {
                this.setState({ isLogin: false })
            }
            // console.log(x)
        });
        // readData().then(x => this.setState({ isLogin: x }));
        // if (this.state.isLogin !== undefined) {
        //     console.log(this.state.isLogin, "OK");
        //     // return true
        // } else {
        //     console.log("NOT SET");
        // }
    }
    render() {

        // let isLogin = readData();
        // console.log("isLogin", isLogin)
        // console.log(readData());

        return (
            <BlogProvider>

                <Stack.Navigator headerMode={'screen'} >

                    {(!this.state.isLogin) ? (<Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />) : (<Stack.Screen name="List" component={ListingScreen} />)}

                    <Stack.Screen name="Listing" component={ListingScreen} />
                    {/* <Stack.Screen name="Registering" component={Register} options={{ headerShown: false }} /> */}
                    <Stack.Screen name="Profile" component={Profile} />

                    <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
                    <Stack.Screen name="Show" component={ShowScreen} />
                    <Stack.Screen name="Add" component={AddScreen} />
                </Stack.Navigator>
            </BlogProvider>
        );
    }
}

const styles = StyleSheet.create({

})

export default MainNavigation;