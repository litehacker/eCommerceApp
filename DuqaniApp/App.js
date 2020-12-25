// In App.js in a new project
// onPress={()=> navigation.navigate('Home')}
// onPress={() => navigation.goBack()}
// onPress={() => navigation.push('Details')}
// onPress={() => navigation.popToTop()}

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen.js'
import CategoryDetailsScreen from './screens/CategoryDetailsScreen.js'
import ProductDetailsScreen from './screens/ProductDetailsScreen.js'
import CartScreen from './screens/CartScreen.js'
import OrderScreen from './screens/OrderScreen.js'
import CheckoutScreen from './screens/CheckoutScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'დუქანი' }}/>
      <HomeStack.Screen name="CategoryDetails" component={CategoryDetailsScreen} options={({ route }) => ({ title: route.params.categoryName })}/>
      <HomeStack.Screen name="ProductDetails" component={ProductDetailsScreen} options={({ route }) => ({ title: route.params.productName })}/>
    </HomeStack.Navigator>
  );
}
const OrderStack = createStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="CheckoutScreen" component={CheckoutScreen} options={({ route }) => ({ title: 'შეკვეთები' })}/>
    </OrderStack.Navigator>
  );
}
const CartStack = createStackNavigator();

function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="CartScreen" component={CartScreen} options={{ title: 'კალათა' }}/>
      <CartStack.Screen name="CheckoutScreen" component={CheckoutScreen} options={({ route }) => ({ title: route.params.title })}/>
    </CartStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'დუქანი') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'კალათა') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'შეკვეთები') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#775DCB',
          inactiveTintColor: '#726A8A',
        }}>
        <Tab.Screen name="დუქანი" component={HomeStackScreen} />
        <Tab.Screen name="შეკვეთები" component={OrderStackScreen} />
        <Tab.Screen name="კალათა" component={CartStackScreen} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
