import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/login/index"
import Formulario from "./src/pages/formulario/index"
import Acompanhamento from "./src/pages/acompanhamento/index"


const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen //Primera pag
          name="Login"
          component={Login}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

        <Stack.Screen //segunda pag
          name="Formulario"
          component={Formulario}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

        <Stack.Screen //terceira pag
          name="Acompanhamento"
          component={Acompanhamento}
          options={{
            // headerTintColor:"#F00"
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
