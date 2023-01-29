import { NavigationContainer } from "@react-navigation/native"
import AppNavigation from "./app"
import AuthNavigation from "./auth"

const Navigation = () => {
  return <NavigationContainer>
    <AuthNavigation />
  </NavigationContainer>
}

export default Navigation