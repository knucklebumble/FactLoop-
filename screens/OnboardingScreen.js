import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../themes';

const { width, height } = Dimensions.get('window');

const onboardingData = [
  {
    id: 1,
    title: 'Welcome to Our App',
    subtitle: 'Discover amazing features that will transform your experience',
    image: '🚀',
    backgroundColor: theme.colors.primary[50],
    primaryColor: theme.colors.primary[600],
  },
  {
    id: 2,
    title: 'Stay Connected',
    subtitle: 'Connect with friends and family in ways you never imagined',
    image: '🌟',
    backgroundColor: theme.colors.secondary[50],
    primaryColor: theme.colors.secondary[600],
  },
  {
    id: 3,
    title: 'Get Started',
    subtitle: 'Everything you need is right at your fingertips. Let\'s begin!',
    image: '✨',
    backgroundColor: theme.colors.success[50],
    primaryColor: theme.colors.success[600],
  },
];

const OnboardingScreen = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const animateToNext = (index) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex(index);
      scrollViewRef.current?.scrollTo({
        x: index * width,
        animated: false,
      });
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      animateToNext(currentIndex + 1);
    } else {
      onComplete && onComplete();
    }
  };

  const handleSkip = () => {
    onComplete && onComplete();
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      animateToNext(currentIndex - 1);
    }
  };

  const renderDot = (index) => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1.2, 0.8],
      extrapolate: 'clamp',
    });
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        key={index}
        style={[
          theme.componentStyles.indicators.dot,
          {
            backgroundColor: currentIndex === index 
              ? onboardingData[currentIndex].primaryColor 
              : theme.colors.neutral[300],
            transform: [{ scale }],
            opacity,
          },
        ]}
      />
    );
  };

  const renderSlide = ({ item, index }) => (
    <View
      style={[
        styles.slide,
        { backgroundColor: item.backgroundColor },
      ]}
    >
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <View style={styles.imageContainer}>
          <Text style={styles.emoji}>{item.image}</Text>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={[
            theme.typography.textStyles.h1,
            styles.title,
            { color: item.primaryColor }
          ]}>
            {item.title}
          </Text>
          
          <Text style={[
            theme.typography.textStyles.body1,
            styles.subtitle,
            { color: theme.colors.text.secondary }
          ]}>
            {item.subtitle}
          </Text>
        </View>
      </Animated.View>
    </View>
  );

  return (
    <SafeAreaView style={[theme.layout.screen.fullScreen, { backgroundColor: theme.colors.background.primary }]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={[theme.componentStyles.buttons.ghost, styles.skipButton]}
            onPress={handleSkip}
          >
            <Text style={[
              theme.typography.textStyles.button,
              { color: theme.colors.text.secondary }
            ]}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        {/* Slides */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
        >
          {onboardingData.map((item, index) => (
            <View key={item.id} style={{ width }}>
              {renderSlide({ item, index })}
            </View>
          ))}
        </ScrollView>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => renderDot(index))}
        </View>

        {/* Bottom Actions */}
        <View style={styles.bottomContainer}>
          <View style={styles.actionButtons}>
            {currentIndex > 0 && (
              <TouchableOpacity
                style={[
                  theme.componentStyles.buttons.secondary,
                  styles.actionButton,
                  styles.previousButton,
                ]}
                onPress={handlePrevious}
              >
                <Text style={[
                  theme.typography.textStyles.button,
                  { color: theme.colors.text.primary }
                ]}>
                  Previous
                </Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity
              style={[
                theme.componentStyles.buttons.primary,
                styles.actionButton,
                styles.nextButton,
                { backgroundColor: onboardingData[currentIndex].primaryColor },
              ]}
              onPress={handleNext}
            >
              <Text style={[
                theme.typography.textStyles.button,
                { color: theme.colors.background.primary }
              ]}>
                {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  skipButton: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing['2xl'],
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 350,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing['2xl'],
    ...theme.shadows.large,
  },
  emoji: {
    fontSize: 80,
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
    fontWeight: '700',
  },
  subtitle: {
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    gap: theme.spacing.sm,
  },
  bottomContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    borderRadius: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previousButton: {
    backgroundColor: theme.colors.background.secondary,
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
  },
  nextButton: {
    ...theme.shadows.medium,
  },
};

export default OnboardingScreen;