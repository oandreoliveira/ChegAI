import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateCadastroVaga from './screens/CreateCadastroVaga';
import Profile from './screens/Profile';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';
import Vagas from './screens/Vagas';
import Home1 from './screens/Home1';

const store = createStore(reducer);

const Stack = createStackNavigator();

const myOptions = {
  title: 'App ChegAI',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#2667ff',
  },
};
function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={Home1} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreateCadastroVaga}
          options={{ ...myOptions, title: 'Vagas' }}
        />
        <Stack.Screen
          name="Vagas"
          component={Vagas}
          options={{ ...myOptions, title: 'Dados da Vaga' }}
        />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
