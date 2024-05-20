import React, { useEffect, useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { AdEventType, RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';
import { colors } from '../constants/colorTheme';

const rewardedAdUnitId = __DEV__ ? TestIds.REWARDED : 'your-real-rewarded-ad-unit-id';

const rewardedAd = RewardedAd.createForAdRequest(rewardedAdUnitId, {
  requestNonPersonalizedAdsOnly: true,
});

export default function HelpDeveloper() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = rewardedAd.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    rewardedAd.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  const showAd = () => {
    if (loaded) {
      rewardedAd.show();
    } else {
      console.log('Ad not loaded yet');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help a Developer</Text>
      <Button title="Watch Ad to Help" onPress={showAd} disabled={!loaded} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundPurple,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: colors.white,
  },
});
