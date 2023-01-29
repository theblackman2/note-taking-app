import { ActivityIndicator, Text, View } from "react-native"

const Loading = () => {
  return <View style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }}>
    <ActivityIndicator size='large' />
    <Text style={{
      marginTop: 20
    }}>Loading...</Text>
  </View>
}

export default Loading