import React from 'react';
import {View, Text } from 'react-native';
import Button from '../components/Button';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checkout</Text>
      <Text>1 პროდუქტი</Text>
      <Text>2 პროდუქტი</Text>
      <Text>---- ჯამი: 100ლ</Text>
      <Button text={'button'}/>
    </View>
  );
}

export default HomeScreen;
