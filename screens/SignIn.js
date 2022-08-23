import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import realm, {
  getAllUsers,
  addUser,
  deleteAllUsers
} from '../model/User';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearStorage, readData, saveData } from './asyn-storage/LoginSession';

let STORAGE_KEY = '@USER_NAME';

const SignIn = ({ navigation }) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    chk_textInputChnge: false,
    secureTextEntry: true,
  });
  const [users, setUsers] = React.useState(getAllUsers());

  const onChangeEmailInput = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        chk_textInputChnge: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        chk_textInputChnge: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginUser = () => {
    users.forEach((user) => {
      if (data.email == user.email && data.password == user.password) {
        // console.log(data);
        // console.log({ username: user.name, useremail: user.email, userid: user.userID });
        saveData({ username: user.name, useremail: user.email, userid: user.userID })
        navigation.navigate('Profile', { formdata: { name: user.name, email: user.email } })
      }
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to BlogApp</Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <ScrollView>
          <Text style={styles.text_footer}> Login </Text>


          <View style={styles.action}>
            <FontAwesome name="lock" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Your Email"
              autoCapitalize="none"
              onChangeText={text => onChangeEmailInput(text)}
            />
            <Feather
              name="check-circle"
              color={data.chk_textInputChnge ? 'green' : 'grey'}
              size={20}
            />
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Your password"
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={text => handlePasswordChange(text)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Feather
                name={data.secureTextEntry ? 'eye-off' : 'eye'}
                color={data.password ? 'green' : 'grey'}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => { loginUser() }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register')
              }}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#009387',
                  },
                ]}>
                Register here
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              saveData({ username: "Kishor", useremail: "k@gmail.com", userid: "12" })
              navigation.navigate("Listing")

            }}>
              <Text>login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent : 'center',
    // alignItems : 'center'
    backgroundColor: '#1B9CFC',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignIn;