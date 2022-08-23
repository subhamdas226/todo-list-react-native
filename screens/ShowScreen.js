import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, ImageBackground, Image } from 'react-native';
import BlogContext from './DataHouse';

const ShowScreen = ({ navigation, route }) => {
  React.useEffect(() => {
    navigation.setOptions({
      title: '',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#1180C5'
      },
    })
  }, [])
  const { blogPosts } = React.useContext(BlogContext)
  const blogid = route.params.blogID

  const fetchByID = blogPosts.find((p) => p.id === blogid)

  return (

    <SafeAreaView style={styles.containerStyle}>
      <StatusBar backgroundColor={'rgba(0,0,0,0)'} />
      <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/23/3b/aa/233baa01ec1e45a9d1d05d6bf585ef4a.png' }} style={{ flex: 1, width: "100%", height: '100%' }} >

        <View style={styles.boxStyle}>
          <View style={styles.TitleStyle}>
            <Text style={styles.titleTextStyle}>
              {fetchByID.title}
            </Text>
          </View>
          <View style={styles.metaBoxStyle}>
            <View style={styles.profileStyle}>
              <Image style={styles.imgStyle}
                resizeMode="contain"
                source={require("./imgs/profile.jpg")}
              />
            </View>
            <View>
              <View style={styles.metasStyle}>
                <Text style={styles.nameStyle}>{fetchByID.writer}</Text>
                <View style={styles.bulletStyle}></View>
                <Text style={styles.dateStyle}>{fetchByID.date}</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentStyle}>
            <Text style={styles.textStyle}>
              {fetchByID.desc}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({

  TitleStyle: {
    marginTop: 10
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 30,
    letterSpacing: 1,
    lineHeight:45,
    fontWeight: '600',
    textTransform: 'capitalize'
  },
  containerStyle: {
    backgroundColor: 'white',
    flex: 1
  },
  boxStyle: {
    marginHorizontal: 15
  },
  metaBoxStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15
  },
  profileStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 5,
  },
  imgStyle: {
    width: 20,
    height: 20
  },
  contentStyle: {
    paddingTop: 20,
  },
  textStyle: {
    fontSize: 19,
    textAlign: 'justify',
    color: 'black',
    letterSpacing: 1,
    lineHeight:25
  },
  bulletStyle: {
    backgroundColor: "grey",
    width: 8,
    height: 8,
    marginRight: 5,
    borderRadius: 10
  },
  nameStyle: {
    marginRight: 10,
    fontSize: 18
  },
  metasStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dateStyle: {
    fontStyle: 'italic'
  }
})

export default ShowScreen;


