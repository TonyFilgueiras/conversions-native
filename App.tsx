import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.purple },
          headerTitleStyle: { color: colors.white },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Basic Unit Converter",
          }}
        />
        <Stack.Screen
          name="Conversion"
          component={ConversionScreen}
          options={{
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
  icon: {
    marginLeft: -10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
