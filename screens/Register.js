import React from 'react';
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
  deleteAllUsers,
} from '../model/User';

const Register = ({ navigation }) => {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    chk_textInputChnge: false,
    secureTextEntry: true,
  });

  // useEffect(() =>{
  const onChangeNameInput = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        name: val,
        // chk_textInputChnge : true
      });
    } else {
      setData({
        ...data,
        name: val,
        // chk_textInputChnge : false
      });
    }
  };

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

  const registerUser = () => {
    console.log(data)
    if (data.name && data.email && data.password) {
      addUser(data.name, data.email, data.password)
      navigation.navigate('SignIn');
    }
  }
  // })

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Get Started with BlogApp</Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={styles.footer}
      >
        <ScrollView>
          <Text style={styles.text_footer}> Register</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Your Name"
              autoCapitalize="none"
              onChangeText={text => onChangeNameInput(text)}
            />
            {/* { data.chk_textInputChnge ?  */}
            <Feather
              name="check-circle"
              color={data.name ? 'green' : 'grey'}
              size={20}
            />
            {/* :
                        null
                    } */}
          </View>

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
            <TouchableOpacity style={styles.signIn} onPress={() => {
              registerUser()
              // navigation.navigate('Login')
            }}>
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
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}
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
                login here
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

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
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Register;
