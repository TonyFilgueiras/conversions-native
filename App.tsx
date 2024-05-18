import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConversionScreen from "./src/screens/ConversionScreen";
import { colors } from "./src/constants/colorTheme";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "./src/store/store";

const Stack = createNativeStackNavigator();

function AppContent() {
  const unitConverting = useSelector((state: RootState) => state.unitConverting.unit);

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
            title: "Basic Unit Conversions",
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
            title: `${unitConverting.charAt(0).toUpperCase() + unitConverting.slice(1)} Conversion`,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightPurple,
    alignItems: "center",
    justifyContent: "center",
  },
});
