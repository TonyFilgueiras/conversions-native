import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConversionScreen from "./src/screens/ConversionScreen";
import { colors } from "./src/constants/colorTheme";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./src/store/store";
import Icon from "react-native-vector-icons/Ionicons";
import { toggleIsVisible } from "./src/store/sideMenuSlice";
import OptionsScreen from "./src/screens/OptionsScreen";
import HelpDeveloper from "./src/screens/HelpDeveloperScreen";
import mobileAds, { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import "expo-dev-client"

const Stack = createNativeStackNavigator();

function AppContent() {
  const unitConverting = useSelector((state: RootState) => state.unitConverting.unit);
  const isSideMenuVisible = useSelector((state: RootState) => state.sideMenu.isVisible);
  const dispatch = useDispatch();

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
            headerLeft: () => (
              <Icon
                name={isSideMenuVisible ? "close": "menu"} // Choose the icon name from Ionicons (or any other icon set)
                size={30}
                color="white"
                onPress={() => dispatch(toggleIsVisible())}
                style={styles.icon}
              />
            ),
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
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{
            title: `Options`,
          }}
        />
        <Stack.Screen
          name="HelpDeveloper"
          component={HelpDeveloper}
          options={{
            title: `Help a Developer`,
          }}
        />
      </Stack.Navigator>
      <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER } />
    </NavigationContainer>
  );
}

export default function App() {
  mobileAds()
  .initialize()
  .then(adapterStatuses => {
  });
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
