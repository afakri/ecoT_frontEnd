import React from "react";
import { View } from "react-native";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
