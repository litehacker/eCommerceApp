import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checkout</Text>
      <Text>1 პროდუქტი</Text>
      <Text>2 პროდუქტი</Text>
      <Text>---- ჯამი: 100ლ</Text>
    </View>
  );
}

export default HomeScreen;
