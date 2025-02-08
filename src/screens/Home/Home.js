import React from "react";
import styles from "./styles";
import users from "../../components/users";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Alert,
  Touchable,
} from "react-native";
import UserCard from "../../components/UserCard";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>EMPLOYEES LIST</Text>

        {/* Dynamically accessing users */}
        {users.map((user, key) => {
          return (
            <UserCard
              navigation={navigation}
              key={key}
              avatarName={user.username}
              avatarRole={user.role}
            ></UserCard>
          );
        })}

        <View style={styles.Footer}>
          <Text style={{ fontSize: 19, color: "grey", textAlign: "center" }}>
            Your Privacy and Security is ok
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
