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
import mobileAds, { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import "expo-dev-client";
import React from "react";
import { useTranslation } from "./src/hooks/useTranslation";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLanguage } from "./src/store/languageSelectedSlice";
import { AvailableLanguages } from "./src/typescript/IAvailableLanguages";

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3664148475226821~5782224309';

const Stack = createNativeStackNavigator();

function AppContent() {
  const unitConverting = useSelector((state: RootState) => state.unitConverting.unit);
  const isSideMenuVisible = useSelector((state: RootState) => state.sideMenu.isVisible);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  async function loadLanguage() {
    try {
      const language = await AsyncStorage.getItem("language");
  
      if (language) {
        dispatch(setLanguage(language as AvailableLanguages))
      } else if (getLocales()[0].languageCode) {
        dispatch(setLanguage(getLocales()[0].languageCode as AvailableLanguages))
      }
      
    } catch {
      console.log("deu um erro ai")
    }
  }

  React.useEffect(() => {
    loadLanguage();
  }, [dispatch]);

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
                name={isSideMenuVisible ? "close" : "menu"} // Choose the icon name from Ionicons (or any other icon set)
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
            title: `${t(unitConverting.charAt(0).toUpperCase() + unitConverting.slice(1) + " Conversion")}`,
          }}
        />
        <Stack.Screen
          name="Options"
          component={OptionsScreen}
          options={{
            title: t("Options"),
          }}
        />
      </Stack.Navigator>
      <BannerAd unitId={adUnitId} size={BannerAdSize.FULL_BANNER} />
    </NavigationContainer>
  );
}

export default function App() {
  mobileAds()
    .initialize()
    .then((adapterStatuses) => {});
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
