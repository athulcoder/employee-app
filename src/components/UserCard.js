import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Avatar } from "../assets/images";

export default function UserCard({ avatarName, avatarRole, navigation }) {
  return (
    <TouchableHighlight
      underlayColor="wheat"
      onPress={() => navigation.navigate("Profile", { avatarName, avatarRole })}
      style={styles.userContainer}
    >
      <View style={styles.userCard}>
        <Image style={{ width: 100, height: 100 }} source={Avatar} />
        <View style={styles.container}>
          <Text style={styles.userName}>{avatarName}</Text>
          <Text style={styles.userRole}>{avatarRole}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
  },
  userContainer: {
    marginBottom: 30,
    width: "90%",
    height: 160,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 8,
    backgroundColor: "#fff",
  },
  userCard: {
    gap: 30,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 40,
    alignSelf: "center",
  },

  userName: {
    color: "#fff78",
    fontSize: 24,
    fontWeight: "bold",
  },
  userRole: {
    fontSize: 16,
    color: "grey",
  },
});
