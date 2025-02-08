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
  const { username, role } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profile}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Hello, <Text style={{ color: "dodgerblue" }}>{username}</Text>
          </Text>

          <Text style={{ color: "orange", textAlign: "center", fontSize: 19 }}>
            {role}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  profile: {
    width: "90%",
    height: 150,
    display: "flex",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 8,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 10,
  },
});
