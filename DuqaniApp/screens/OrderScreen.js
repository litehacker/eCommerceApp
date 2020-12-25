import * as React from 'react';
import { View, Text } from 'react-native';

function OrderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Orders</Text>
      <Text>1 პროდუქტი</Text>
      <Text>2 პროდუქტი</Text>
    </View>
  );
}

export default OrderScreen;
