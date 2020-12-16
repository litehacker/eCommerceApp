// In App.js in a new project
// onPress={()=> navigation.navigate('Home')}
// onPress={() => navigation.goBack()}
// onPress={() => navigation.push('Details')}
// onPress={() => navigation.popToTop()}

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen.js'
import DetailsScreen from './screens/DetailsScreen.js'



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'მთავარი' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
