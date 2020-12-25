import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>კალათა</Text>
      <Text>1 პროდუქტი</Text>
      <Text>2 პროდუქტი</Text>
      <Text>---- ჯამი: 100ლ</Text>
      <Button
        title="შეუკვეთე"
        onPress={() => navigation.navigate('CheckoutScreen',{title: 'შეკვეთის გაფორმება',})}
      />
    </View>
  );
}

export default CartScreen;
