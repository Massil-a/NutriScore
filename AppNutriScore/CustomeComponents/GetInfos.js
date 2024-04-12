import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GetInfos() {
  const [codeBarre, setCodeBarre] = React.useState('');
  const navigation = useNavigation();

  function sendBarCode() {
    fetch("https://world.openfoodfacts.org/api/v2/product/"+codeBarre+".json")
    .then(response=>response.json())
    .then(data=>{
        console.log(data.product.brands);
        navigation.navigate('GetInfos', { brand: data.product.brands });
    })
    .catch(e=>{
        console.log("\nERRRRRRREUR SUR LE FETCH : "+e);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTRE TON CODE BAaAaRrE</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre Code Barre"
        onChangeText={setCodeBarre}
        value={codeBarre}
      />
      <Button
        style={styles.button}
        title="Envvvvvvvoyer"
        onPress={sendBarCode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign:"center"
  },
  button: {
    width: '100%',
  },
});