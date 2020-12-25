import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.large} >
        <Text>კატეგორიები</Text>
        <Button title="ყურსასმენი" onPress={() => navigation.navigate('CategoryDetails',{categoryName: 'ყურსასმენი',})}/>
        <Button title="სანთებლები" onPress={() => navigation.navigate('CategoryDetails',{categoryName: 'სანთებელა',})}/>
        <Button title="ბრები" onPress={() => navigation.navigate('CategoryDetails',{categoryName: 'ბრები',})}/>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.small}/>
        <View style={styles.small}/>

        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      <View style={styles.small} />
      <View style={styles.small} />
      <View style={styles.small} />
      <View style={styles.small} />
      <View style={styles.small} />
      </ScrollView>

      <View style={styles.large} />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  small: {
    width: 100,
    height: 100,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    height: 300,
    backgroundColor: 'lightblue',
  },
})

export default HomeScreen;
