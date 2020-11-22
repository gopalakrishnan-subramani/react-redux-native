/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'


 
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();
 
import Cart from './cart/containers/Cart'
import ProductList from './cart/containers/ProductList'
import Checkout from './cart/screens/Checkout'
import Counter from './containers/Counter';

function Home(props) {
  const {navigation} = props;

    return (
      <View>
         <Button title="Products" onPress= { () => navigation.navigate('ProductList') } />
         <Button title="Cart" onPress= { () =>  navigation.navigate('Cart')  } />
         <Button title="Checkout" onPress= { () => navigation.navigate('Checkout') } />
         <Button title="Counter" onPress= { () => navigation.navigate('Counter') } />

      </View>
    )
}

 
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
 
      

      <Stack.Screen name="Home" component={Home} options={{ title: 'Home'}}/>


      <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Product List'}}/>

      <Stack.Screen name="Cart" component={Cart} options={{
           title: 'Cart',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />

      <Stack.Screen name="Counter" component={Counter} options={{
           title: 'Counter',
           headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="black"
          />
          )
           }} />
           


       
        <Stack.Screen name="Checkout" component={Checkout}  options={{ 
          title: 'Checkout',
          headerRight:()=>(
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#black"
          />
          )
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};
 
export default App;