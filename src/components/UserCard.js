import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Avatar } from "../assets/images";
export default function UserCard({ avatarName, avatarRole }) {
  return (
    <View style={styles.userCard}>
      <Image style={{ width: 100, height: 100 }} source={Avatar} />
      <View style={styles.container}>
        <Text style={styles.userName}>{avatarName}</Text>
        <Text style={styles.userRole}>{avatarRole}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 30,
  },
  userCard: {
    gap: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    height: 160,
    alignSelf: "center",
    top: 40,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 8,
    marginBottom: 30,
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
