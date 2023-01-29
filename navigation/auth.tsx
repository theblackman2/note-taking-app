
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login';
import SignUpScreen from '../screens/auth/signup';
import WelcomScreen from '../screens/auth/welcome';
import { AuthRoutes } from '../utils/constants';

const Stack = createNativeStackNavigator()

const AuthNavigation = () => {
  return <Stack.Navigator initialRouteName={AuthRoutes.welcome} screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name={AuthRoutes.login} component={LoginScreen} />
    <Stack.Screen name={AuthRoutes.signup} component={SignUpScreen} />
    <Stack.Screen name={AuthRoutes.welcome} component={WelcomScreen} />
  </Stack.Navigator>
}

export default AuthNavigation