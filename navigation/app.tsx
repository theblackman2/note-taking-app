import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/app/home';
import { AppRoutes } from '../utils/constants';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return <Stack.Navigator initialRouteName={AppRoutes.home}>
    <Stack.Screen name={AppRoutes.home} component={HomeScreen} />
  </Stack.Navigator>
}

export default AppNavigation