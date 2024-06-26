import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../constants/colorTheme";
import ConversionNavigationContainer from "../components/ConversionNavigationContainer";
import { useDispatch } from "react-redux";
import { resetUnit } from "../store/unitConvertingSlice";
import SideMenu from "../components/SideMenu";
import { useTranslation } from "../hooks/useTranslation";

// Define the type for the navigation prop
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface Props {
  navigation: HomeScreenNavigationProp;
}

// Define the navigation stack parameter list
export type RootStackParamList = {
  Home: undefined;
  Conversion: { unitConverting: string };
  Options: undefined
  HelpDeveloper: undefined
};

export default function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const {t} = useTranslation()

  React.useEffect(() => {
    dispatch(resetUnit());
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ConversionNavigationContainer style={styles.cell} title={t("Speed")} unit="speed" linkTo="Speed" navigation={navigation} />
        <ConversionNavigationContainer style={styles.cell} title={t("Length")} unit="length" linkTo="Length" navigation={navigation} />
      </View>
      <View style={styles.row}>
        <ConversionNavigationContainer style={styles.cell} title={t("Mass")} unit="mass" linkTo="Mass" navigation={navigation} />
        <ConversionNavigationContainer style={styles.cell} title={t("Temperature")} unit="temperature" linkTo="Temperature" navigation={navigation} />
      </View>
      <SideMenu navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.backgroundPurple,
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
