import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from "react-native";
import { colors } from "../constants/colorTheme";
import { HomeScreenNavigationProp } from "../screens/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { closeMenu } from "../store/sideMenuSlice";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import { useTranslation } from "../hooks/useTranslation";

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3664148475226821/9196575303';

interface Props {
  navigation: HomeScreenNavigationProp;
}

const SideMenu = ({ navigation }: Props) => {
  const isVisible = useSelector((state: RootState) => state.sideMenu.isVisible);
  const dispatch = useDispatch();
  const sideMenuAnimation = useRef(new Animated.Value(0)).current;
  const {t} = useTranslation()

  useEffect(() => {
    if (isVisible) {
      Animated.timing(sideMenuAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(sideMenuAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, sideMenuAnimation]);

  const translateX = sideMenuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 0],
  });

  function handleMenuItemSelected(navigateTo: any) {
    dispatch(closeMenu())
    navigation.navigate(navigateTo)  
  }

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      <TouchableOpacity onPress={() => handleMenuItemSelected("Options")}>
        <Text style={styles.menuItem}>{t("Options")}</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => handleMenuItemSelected("HelpDeveloper")}>
        <Text style={styles.menuItem}>{t("Go Premium")}</Text>
      </TouchableOpacity> */}
      <BannerAd unitId={adUnitId } size={BannerAdSize.WIDE_SKYSCRAPER} /> 
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "80%",
    backgroundColor: colors.purple,
    padding: 16,
    elevation: 60,
  },
  menuItem: {
    // borderWidth: 1,
    color: "white",
    fontSize: 18,
    paddingVertical: 15,
    marginVertical: 20,
  },
});

export default SideMenu;
