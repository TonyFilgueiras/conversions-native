import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityProps, Image } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../constants/colorTheme";
import { HomeScreenNavigationProp } from "../screens/HomeScreen";
import speed from "../../assets/speed.png";
import temp from "../../assets/temp.png";
import weight from "../../assets/weight.png";
import length from "../../assets/length.png";

type Props = {
  title: string;
  linkTo: string;
  navigation: HomeScreenNavigationProp;
} & TouchableOpacityProps;

export default function ConversionNavigationContainer({ title, linkTo, navigation, ...props }: Props) {
  let cardImage;

  switch (title) {
    case "Speed":
      cardImage = speed;
      break;
    case "Temperature":
      cardImage = temp;
      break;
    case "Weight":
      cardImage = weight;
      break;

    case "Length":
      cardImage = length;
      break;
  }

  const handleCellPress = () => {
    navigation.navigate("Conversion", { name: title });
  };

  return (
    <TouchableOpacity onPress={handleCellPress} {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={cardImage} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.purple,
  },
  title: {
    flex: 1, 
    fontSize: 20,
    fontWeight: "bold",
    color: colors.purple,
  },
  image: {
    flex: 4,
    width: 100,
    resizeMode: 'contain',
  },
});
