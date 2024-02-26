import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Product from './Screens/Product';
import { Provider } from 'react-redux';
import { store } from './Redux/RootReducer';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';


function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Product" component={Product} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}


export default App;
