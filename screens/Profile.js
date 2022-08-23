import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { readData } from './asyn-storage/LoginSession';
import AsyncStorage from '@react-native-async-storage/async-storage';

var { width } = Dimensions.get('window')

const Profile = ({ route, navigation }) => {
    const Pname = route.params.formdata.name;
    const Pemail = route.params.formdata.email;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [second, setSecond] = useState("");


    useEffect(() => {
        // console.log()
        setName(Pname);
        setEmail(Pemail);
        
        const d = new Date();
        let seconds = d.getSeconds();
        setTimeout(() => {
            setSecond(seconds)
        }, 1000)
        // setSecond((second) => second++)

    })

    return (
        <View style={styles.container}>
            <Image resizeMode='contain'
                source={require("../assets/bat.png")}
                style={styles.image} />
            <View style={styles.card}>
                <Text style={styles.name}>
                    Name : {name}
                </Text>
                <Text style={styles.email} >
                    Email : {email}
                </Text>
                <Text style={styles.email} >
                    Second : {second}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Listing')}>
                    <View style={{ backgroundColor: 'black', paddingVertical: 10, paddingHorizontal: 20}}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white', }}>Blog</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        width: width - 30,
        height: width,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#fff'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -55,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width,
        alignItems: 'center'
    },
    name: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 22,
    },
    email: {
        fontSize: 22,
        color: "orange",
        fontWeight: "bold",
        marginTop: 10,
    },
})

export default Profile;