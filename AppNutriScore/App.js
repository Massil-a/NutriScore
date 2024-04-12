import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetInfos from './CustomComponents/GetInfos';
import InfosCode from './CustomComponents/InfosCode';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Scan" component={GetInfos} options={{ title: 'Entrez un Code Barre' }} />
        <Stack.Screen name="InfosCode" component={InfosCode} options={{ title: 'Informations sur votre produit!l' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}