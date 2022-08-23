import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import BlogContext from './DataHouse';
import { clearStorage, readData, saveData } from './asyn-storage/LoginSession';
import Card from './components/Card';
import react from 'react';

const ListingScreen = ({ navigation }) => {
  const { blogPosts } = React.useContext(BlogContext)
  let logout = (() => {
    // readData().then(x => setIsLogin(x));
    // readData().then(x => console.log(x));
    // console.log(here);
    clearStorage()
    navigation.navigate("Register")
    // readData()

    // saveData('', '', '', 'false')
    // console.log('Logout successfully')
  })

  React.useEffect(() => {
    navigation.setOptions({
      title: 'BlogApp',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1180C5'
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => logout()}>
          <View style={{ backgroundColor: 'white', padding: 7, borderRadius: 50 }}>
            <Icon2 name="logout" size={25} color='#1180C5' />
          </View>
        </TouchableOpacity>
      ),
      backgroundColor: "red"
    })
  }, [])

  return (
    <SafeAreaView style={styles.container} backgroundColor={'#E5EDF1'}>
      <StatusBar translucent={true} backgroundColor="#1180C5" />
      <View style={{ alignItems: 'center' }}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={blogPosts}
          renderItem={({ item }) => {
            return (
              <Card info={item} navigation={navigation} />
            )
          }}
        />
      </View>

      <View style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: '#1180C5', padding: 10, borderRadius: 50 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <Icon name="plus" size={30} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});


export default ListingScreen