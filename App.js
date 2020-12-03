/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigation from './src/navigation';
import AuthContext from './src/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const [login, setLogin] = useState(false);
  const navigationRef = useRef();

  React.useEffect(() => {
    // setTimeout(() => {
    //   navigationRef.current.navigate('SessionExpiry')
    // }, 2000);
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ login, setLogin: setLogin }}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
