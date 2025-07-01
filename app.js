import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './themes';
import OnboardingScreen from './screens/OnboardingScreen';

const ONBOARDING_COMPLETED_KEY = 'onboarding_completed';

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const completed = await AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY);
      setIsOnboardingCompleted(completed === 'true');
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setIsOnboardingCompleted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
      setIsOnboardingCompleted(true);
    } catch (error) {
      console.error('Error saving onboarding completion:', error);
    }
  };

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <View style={[theme.layout.screen.centered, { backgroundColor: theme.colors.background.primary }]}>
          <Text style={[theme.typography.textStyles.body1, { color: theme.colors.text.secondary }]}>
            Loading...
          </Text>
        </View>
      </SafeAreaProvider>
    );
  }

  if (!isOnboardingCompleted) {
    return (
      <SafeAreaProvider>
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={[theme.layout.screen.centered, { backgroundColor: theme.colors.background.primary }]}>
        <Text style={theme.typography.textStyles.h1}>Hello from Expo!</Text>
        <Text style={[theme.typography.textStyles.body1, { color: theme.colors.text.secondary, marginTop: theme.spacing.md }]}>
          Now with onboarding flow!
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
