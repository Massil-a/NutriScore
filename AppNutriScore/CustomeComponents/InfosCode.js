import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfosCode({ route }) {
  const { brand } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informations sur le produit</Text>
      <Text>Marque: {brand}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
