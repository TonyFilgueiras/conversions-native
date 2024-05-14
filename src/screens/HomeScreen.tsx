import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../constants/colorTheme";
import ConversionNavigationContainer from "../components/ConversionNavigationContainer";

// Define the type for the navigation prop
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

// Define the navigation stack parameter list
export type RootStackParamList = {
  Home: undefined;
  Conversion: {name:string}; // Define the parameter type for the 'Conversion' screen
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ConversionNavigationContainer style={styles.cell} title="Weight" linkTo="Weight" navigation={navigation} />
        <ConversionNavigationContainer style={styles.cell} title="Speed" linkTo="Speed" navigation={navigation}/>
      </View>
      <View style={styles.row}>
        <ConversionNavigationContainer style={styles.cell} title="Temperature" linkTo="Temperature" navigation={navigation}/>
        <ConversionNavigationContainer style={styles.cell} title="Length" linkTo="Length" navigation={navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lightPurple,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
