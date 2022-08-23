import React , {useEffect, useState} from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './component/MainNavigation';
import Register from './screens/Register';

const App = () => {
  
  return (

    <NavigationContainer>
      {/* <Register /> */}
      <MainNavigation />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;