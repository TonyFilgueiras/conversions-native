import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from "react-native";
import { colors } from "../constants/colorTheme";
import { HomeScreenNavigationProp } from "../screens/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Props {
  navigation: HomeScreenNavigationProp;
}

const SideMenu = ({ navigation }: Props) => {
  const isVisible = useSelector((state: RootState) => state.sideMenu.isVisible);
  const sideMenuAnimation = useRef(new Animated.Value(0)).current;

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
    outputRange: [-320, 0],
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX }] }]}>
      <TouchableOpacity onPress={() => navigation.navigate("Conversion", { unitConverting: "mass" })}>
        <Text style={styles.menuItem}>Options</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Help a Developer")}>
        <Text style={styles.menuItem}>Help a Developer</Text>
      </TouchableOpacity>
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
    borderWidth: 1,
    color: "white",
    fontSize: 18,
    padding: 10,
    marginVertical: 10,
  },
});

export default SideMenu;
