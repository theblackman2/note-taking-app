import { useNavigation } from "@react-navigation/native"
import { Button, Text, View } from "react-native"
import { AuthRoutes } from '../../utils/constants';

const loginScreen: string = AuthRoutes.login
const signupScreen: string = AuthRoutes.signup

const WelcomScreen = () => {
  const navigator = useNavigation()

  return <View style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }}>
    <Text>Welcome screen</Text>
  </View>
}

export default WelcomScreen