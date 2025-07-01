import { Text, View } from 'react-native';
import theme from './themes';

export default function App() {
  return (
    <View style={[theme.layout.screen.centered]}>
      <Text style={theme.typography.textStyles.h1}>Hello from Expo!</Text>
      <Text style={[theme.typography.textStyles.body1, { color: theme.colors.text.secondary, marginTop: theme.spacing.md }]}>
        Now with consistent theming!
      </Text>
    </View>
  );
}
