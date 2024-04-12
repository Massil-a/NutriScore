import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import InfosCode from './InfosCode';

export default function GetInfos() {
  const [codeBarre, setCodeBarre] = React.useState('');
  const navigation = useNavigation();

  function sendBarCode() {
    fetch("s"+codeBarre+".json")
    .then(response=>response.json())
    .then(data=>{
        console.log(data.product.brands);
        navigation.navigate('InfosCode', { brand: data });
    })
    .catch(e=>{
        console.error("ERRRRRRREUR SUR LE FETCH : "+e);
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
    margin:20,
    backgroundColor: '#fff',
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
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