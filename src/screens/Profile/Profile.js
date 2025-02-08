import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Platform,
  View,
  Text,
} from "react-native";
export default function Profile({ route }) {
  const { name, role } = route.params;
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 30 }}>Hello {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profile: {
    width: "90%",
    height: 30,
    backgroundColor: "blue",
  },
});
