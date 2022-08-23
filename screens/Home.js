import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    StatusBar
} from 'react-native';

const Home = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                resizeMode="contain"
                source={require("../assets/bat.png")}
            />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <TouchableOpacity style={styles.submitBtn}
                onPress={() => navigation.navigate('Profile', { formdata: { name: name, email: email } })}
            >
                <Text style={styles.SubmitTxt}>
                    Submit
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navigateBtn} onPress={() => navigation.navigate('Home2')}>
                <Text style={styles.SubmitTxt}>Navigate to Home2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent : 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    image: {
        marginTop: 30,
        height: 100,

    },
    inputView: {
        marginTop: 20,
        backgroundColor: '#FFC0CB',
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 10,
        alignItems: 'center'
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize: 18,
        color: '#000'
    },
    submitBtn: {
        width: '80%',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#FF1493',
        // fontSize : 25
    },
    SubmitTxt: {
        fontSize: 25,
        color: '#fff',
    },
    navigateBtn:{
        width: '80%',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#151B54',
    }

})

export default Home;