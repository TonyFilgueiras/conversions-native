import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConversionScreen from "./src/screens/ConversionScreen";
import { colors } from "./src/constants/colorTheme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor={colors.black} />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: colors.purple },
              headerTitleStyle: { color: colors.white },
              headerTintColor: "white",
              headerTitleAlign: "center",
              title: "Unit Conversions",
            }}
          />
          <Stack.Screen
            name="Conversion"
            component={ConversionScreen}
            options={{
              headerStyle: { backgroundColor: colors.purple },
              headerTitleStyle: { color: colors.white },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPurple,
    alignItems: "center",
    justifyContent: "center",
  },
});
