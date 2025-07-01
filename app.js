import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import theme from './themes';
import OnboardingScreen from './screens/OnboardingScreen';

const ONBOARDING_COMPLETED_KEY = 'onboarding_completed';
const USER_DATA_KEY = 'user_data';

export default function App() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const completed = await AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY);
      const storedUserData = await AsyncStorage.getItem(USER_DATA_KEY);
      
      setIsOnboardingCompleted(completed === 'true');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    } catch (error) {
      console.error('Error checking onboarding status:', error);
      setIsOnboardingCompleted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnboardingComplete = async (onboardingData) => {
    try {
      await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
      await AsyncStorage.setItem(USER_DATA_KEY, JSON.stringify(onboardingData));
      
      setIsOnboardingCompleted(true);
      setUserData(onboardingData);
      
      console.log('User onboarding completed:', {
        name: onboardingData.fullName,
        email: onboardingData.email,
        selectedTopics: onboardingData.selectedTopics.length,
      });
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
        <Text style={theme.typography.textStyles.h1}>
          Welcome, {userData?.fullName || 'User'}! 👋
        </Text>
        <Text style={[theme.typography.textStyles.body1, { color: theme.colors.text.secondary, marginTop: theme.spacing.md, textAlign: 'center' }]}>
          You've selected {userData?.selectedTopics?.length || 0} topics and your account is ready to go!
        </Text>
        <Text style={[theme.typography.textStyles.caption, { color: theme.colors.text.tertiary, marginTop: theme.spacing.sm, textAlign: 'center' }]}>
          Email: {userData?.email || 'Not provided'}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
