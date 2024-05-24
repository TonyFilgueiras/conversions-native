import React, { useEffect, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { AdEventType, BannerAd, BannerAdSize, RewardedAd, RewardedAdEventType, TestIds } from "react-native-google-mobile-ads";
import { colors } from "../constants/colorTheme";
import { SafeAreaView } from "react-native-safe-area-context";

const rewardedAdUnitId = __DEV__ ? TestIds.REWARDED : 'your-real-rewarded-ad-unit-id';

const rewardedAd = RewardedAd.createForAdRequest(rewardedAdUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export default function HelpDeveloper() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const unsubscribe = rewardedAd.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
    });

    console.log("efeito foi")
    // Start loading the interstitial straight away
    rewardedAd.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  const showAd = () => {
    if (loaded) {
      rewardedAd.show();
    } else {
      console.log("Ad not loaded yet");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Help a Developer</Text>
      <Button color={colors.lightPurple} title="Watch Ad to Help" onPress={showAd} disabled={!loaded} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundPurple,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: colors.white,
  },
});
