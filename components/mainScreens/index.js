import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { CreateGameScreen } from "./createGameScreens";
import { HomeScreen } from "./homeScreen";
import { PlayGameScreen } from "./playGameScreens";

export const MainScreenStacs = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen name="PlayGame" component={PlayGameScreen} />
        <Stack.Screen name="CreateGame" component={CreateGameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
