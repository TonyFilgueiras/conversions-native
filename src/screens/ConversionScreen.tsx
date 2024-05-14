import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants/colorTheme';

interface Props {
  route?: {
    params: {
      name: string;
    };
  };
}

export default function ConversionScreen({ route}: Props) {
  const name = route?.params.name || "";
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.lightPurple,
  },
});