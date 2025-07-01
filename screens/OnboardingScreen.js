import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../themes';

const { width, height } = Dimensions.get('window');

// Topic selection data
const topicsData = [
  { id: 1, name: 'Technology', emoji: '💻', color: theme.colors.primary[500] },
  { id: 2, name: 'Health & Fitness', emoji: '🏃‍♂️', color: theme.colors.secondary[500] },
  { id: 3, name: 'Business', emoji: '💼', color: theme.colors.success[500] },
  { id: 4, name: 'Science', emoji: '🔬', color: theme.colors.info[500] },
  { id: 5, name: 'Entertainment', emoji: '🎬', color: theme.colors.warning[500] },
  { id: 6, name: 'Sports', emoji: '⚽', color: theme.colors.error[500] },
  { id: 7, name: 'Travel', emoji: '✈️', color: theme.colors.primary[400] },
  { id: 8, name: 'Food & Cooking', emoji: '🍳', color: theme.colors.secondary[400] },
  { id: 9, name: 'Art & Design', emoji: '🎨', color: theme.colors.success[400] },
  { id: 10, name: 'Music', emoji: '🎵', color: theme.colors.info[400] },
  { id: 11, name: 'Education', emoji: '📚', color: theme.colors.warning[400] },
  { id: 12, name: 'Photography', emoji: '📸', color: theme.colors.error[400] },
];

const OnboardingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    selectedTopics: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const steps = [
    { id: 0, title: 'Create Account', subtitle: 'Join our community today' },
    { id: 1, title: 'Choose Topics', subtitle: 'Select topics that interest you' },
    { id: 2, title: 'All Set!', subtitle: 'Your account is ready to go' },
  ];

  const animateToStep = (stepIndex) => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: stepIndex * -width,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentStep(stepIndex);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleNext = () => {
    if (currentStep === 0) {
      if (validateSignUpForm()) {
        animateToStep(1);
      }
    } else if (currentStep === 1) {
      if (formData.selectedTopics.length >= 3) {
        animateToStep(2);
      } else {
        Alert.alert('Please select at least 3 topics that interest you');
      }
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      animateToStep(currentStep - 1);
    }
  };

  const validateSignUpForm = () => {
    const { fullName, email, password, confirmPassword } = formData;
    
    if (!fullName.trim()) {
      Alert.alert('Please enter your full name');
      return false;
    }
    
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Please enter a valid email address');
      return false;
    }
    
    if (password.length < 6) {
      Alert.alert('Password must be at least 6 characters long');
      return false;
    }
    
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const toggleTopic = (topicId) => {
    setFormData(prev => ({
      ...prev,
      selectedTopics: prev.selectedTopics.includes(topicId)
        ? prev.selectedTopics.filter(id => id !== topicId)
        : [...prev.selectedTopics, topicId]
    }));
  };

  const handleComplete = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onComplete && onComplete(formData);
    }, 1500);
  };

  const renderProgressBar = () => (
    <View style={styles.progressContainer}>
      {steps.map((step, index) => (
        <View key={step.id} style={styles.progressStepContainer}>
          <View style={[
            styles.progressStep,
            {
              backgroundColor: index <= currentStep 
                ? theme.colors.primary[500] 
                : theme.colors.neutral[300]
            }
          ]}>
            {index < currentStep ? (
              <Text style={styles.progressStepCompleted}>✓</Text>
            ) : (
              <Text style={[
                styles.progressStepNumber,
                { color: index <= currentStep ? theme.colors.background.primary : theme.colors.text.secondary }
              ]}>
                {index + 1}
              </Text>
            )}
          </View>
          {index < steps.length - 1 && (
            <View style={[
              styles.progressLine,
              {
                backgroundColor: index < currentStep 
                  ? theme.colors.primary[500] 
                  : theme.colors.neutral[300]
              }
            ]} />
          )}
        </View>
      ))}
    </View>
  );

  const renderSignUpForm = () => (
    <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
      <View style={styles.headerContainer}>
        <Text style={[theme.typography.textStyles.h1, styles.title]}>
          Create Account
        </Text>
        <Text style={[theme.typography.textStyles.body1, styles.subtitle]}>
          Join our community and discover amazing content
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.textInput}
          value={formData.fullName}
          onChangeText={(text) => setFormData(prev => ({ ...prev, fullName: text }))}
          placeholder="Enter your full name"
          placeholderTextColor={theme.colors.text.tertiary}
          autoCapitalize="words"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.textInput}
          value={formData.email}
          onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
          placeholder="Enter your email"
          placeholderTextColor={theme.colors.text.tertiary}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.textInput}
          value={formData.password}
          onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
          placeholder="Create a password"
          placeholderTextColor={theme.colors.text.tertiary}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData(prev => ({ ...prev, confirmPassword: text }))}
          placeholder="Confirm your password"
          placeholderTextColor={theme.colors.text.tertiary}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </Animated.View>
  );

  const renderTopicSelection = () => (
    <Animated.View style={[styles.topicContainer, { opacity: fadeAnim }]}>
      <View style={styles.headerContainer}>
        <Text style={[theme.typography.textStyles.h1, styles.title]}>
          Choose Your Interests
        </Text>
        <Text style={[theme.typography.textStyles.body1, styles.subtitle]}>
          Select at least 3 topics to personalize your experience
        </Text>
        <Text style={[theme.typography.textStyles.caption, styles.selectedCount]}>
          {formData.selectedTopics.length} selected
        </Text>
      </View>

      <ScrollView 
        style={styles.topicsScrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.topicsGrid}
      >
        {topicsData.map((topic) => {
          const isSelected = formData.selectedTopics.includes(topic.id);
          return (
            <TouchableOpacity
              key={topic.id}
              style={[
                styles.topicCard,
                {
                  backgroundColor: isSelected ? topic.color : theme.colors.background.secondary,
                  borderColor: isSelected ? topic.color : theme.colors.border.primary,
                  transform: [{ scale: isSelected ? 1.05 : 1 }],
                }
              ]}
              onPress={() => toggleTopic(topic.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.topicEmoji}>{topic.emoji}</Text>
              <Text style={[
                styles.topicName,
                { color: isSelected ? theme.colors.background.primary : theme.colors.text.primary }
              ]}>
                {topic.name}
              </Text>
              {isSelected && (
                <View style={styles.selectedIndicator}>
                  <Text style={styles.selectedCheck}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );

  const renderCompletion = () => (
    <Animated.View style={[styles.completionContainer, { opacity: fadeAnim }]}>
      <View style={styles.completionContent}>
        <View style={styles.successIcon}>
          <Text style={styles.successEmoji}>🎉</Text>
        </View>
        
        <Text style={[theme.typography.textStyles.h1, styles.completionTitle]}>
          Welcome aboard!
        </Text>
        
        <Text style={[theme.typography.textStyles.body1, styles.completionSubtitle]}>
          Your account has been created successfully. Get ready to explore amazing content tailored just for you!
        </Text>

        <View style={styles.summaryContainer}>
          <Text style={[theme.typography.textStyles.h3, styles.summaryTitle]}>
            Your Preferences:
          </Text>
          <View style={styles.selectedTopicsPreview}>
            {formData.selectedTopics.slice(0, 6).map((topicId) => {
              const topic = topicsData.find(t => t.id === topicId);
              return (
                <View key={topicId} style={styles.selectedTopicChip}>
                  <Text style={styles.chipEmoji}>{topic.emoji}</Text>
                  <Text style={styles.chipText}>{topic.name}</Text>
                </View>
              );
            })}
            {formData.selectedTopics.length > 6 && (
              <View style={styles.moreTopicsChip}>
                <Text style={styles.moreTopicsText}>
                  +{formData.selectedTopics.length - 6} more
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={[theme.layout.screen.fullScreen, { backgroundColor: theme.colors.background.primary }]}>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Content */}
        <View style={styles.contentContainer}>
          {currentStep === 0 && renderSignUpForm()}
          {currentStep === 1 && renderTopicSelection()}
          {currentStep === 2 && renderCompletion()}
        </View>

        {/* Navigation Buttons */}
        <View style={styles.bottomContainer}>
          <View style={styles.actionButtons}>
            {currentStep > 0 && currentStep < 2 && (
              <TouchableOpacity
                style={[theme.componentStyles.buttons.secondary, styles.actionButton]}
                onPress={handlePrevious}
              >
                <Text style={[theme.typography.textStyles.button, { color: theme.colors.text.primary }]}>
                  Previous
                </Text>
              </TouchableOpacity>
            )}
            
            <TouchableOpacity
              style={[
                theme.componentStyles.buttons.primary,
                styles.actionButton,
                styles.primaryButton,
                { backgroundColor: theme.colors.primary[500] },
                currentStep === 0 && { flex: 1 }
              ]}
              onPress={handleNext}
              disabled={isLoading}
            >
              {isLoading ? (
                <Text style={[theme.typography.textStyles.button, { color: theme.colors.background.primary }]}>
                  Setting up...
                </Text>
              ) : (
                <Text style={[theme.typography.textStyles.button, { color: theme.colors.background.primary }]}>
                  {currentStep === 0 ? 'Continue' : currentStep === 1 ? 'Next' : 'Get Started'}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
  },
  progressStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressStep: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressStepNumber: {
    fontSize: 14,
    fontWeight: '600',
  },
  progressStepCompleted: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.background.primary,
  },
  progressLine: {
    width: 40,
    height: 2,
    marginHorizontal: theme.spacing.sm,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.md,
    color: theme.colors.text.primary,
    fontWeight: '700',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
    lineHeight: 24,
    maxWidth: 300,
  },
  selectedCount: {
    marginTop: theme.spacing.sm,
    color: theme.colors.primary[500],
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: theme.spacing.lg,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  textInput: {
    height: 50,
    borderWidth: 1.5,
    borderColor: theme.colors.border.primary,
    borderRadius: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    fontSize: 16,
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.background.secondary,
  },
  topicContainer: {
    flex: 1,
  },
  topicsScrollView: {
    flex: 1,
  },
  topicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.xl,
  },
  topicCard: {
    width: '48%',
    padding: theme.spacing.md,
    borderRadius: theme.spacing.md,
    borderWidth: 2,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
    position: 'relative',
    minHeight: 90,
    justifyContent: 'center',
  },
  topicEmoji: {
    fontSize: 24,
    marginBottom: theme.spacing.xs,
  },
  topicName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCheck: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.success[500],
  },
  completionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  completionContent: {
    alignItems: 'center',
  },
  successIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.success[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  successEmoji: {
    fontSize: 48,
  },
  completionTitle: {
    textAlign: 'center',
    marginBottom: theme.spacing.md,
    color: theme.colors.text.primary,
    fontWeight: '700',
  },
  completionSubtitle: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
    lineHeight: 24,
    maxWidth: 320,
    marginBottom: theme.spacing.xl,
  },
  summaryContainer: {
    width: '100%',
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.spacing.md,
    padding: theme.spacing.lg,
  },
  summaryTitle: {
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    fontWeight: '600',
  },
  selectedTopicsPreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  selectedTopicChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary[100],
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  chipEmoji: {
    fontSize: 14,
    marginRight: theme.spacing.xs,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.primary[700],
  },
  moreTopicsChip: {
    backgroundColor: theme.colors.neutral[200],
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  moreTopicsText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.text.secondary,
  },
  bottomContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    paddingVertical: theme.spacing.lg,
    borderRadius: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    ...theme.shadows.medium,
  },
};

export default OnboardingScreen;