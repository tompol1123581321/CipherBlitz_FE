import React from "react";
import { Button, View, Text } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 35, flex: 1 }}>
      <View>
        <Button
          onPress={() => {
            navigation.navigate("PlayGame");
          }}
          title="test1"
        />
        <Button
          onPress={() => {
            navigation.navigate("CreateGame");
          }}
          title="test2"
        />
      </View>
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};
