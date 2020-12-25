import * as React from 'react';
import { Button, View, Text } from 'react-native';

function CategoryDetailsScreen({ route, navigation }) {
  const  categoryName = route.params.categoryName;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{categoryName} Details Screen. Choose a product</Text>
      <Button
        title="Product 1"
        onPress={() => navigation.push('ProductDetails', {productName:'Product 1'})}
      />
      <Button
        title="Product 2"
        onPress={() => navigation.push('ProductDetails',{productName:'Product 2'})}
      />
      <Button
        title="Go to subCategory... again"
        onPress={() => navigation.push('CategoryDetails',{categoryName:'Category 4'})}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default CategoryDetailsScreen;
