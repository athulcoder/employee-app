import { StyleSheet, StatusBar, Platform } from "react-native";
const styles = StyleSheet.create({
  title: {
    padding: 3,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
  },

  Footer: {
    marginTop: 50,
    marginBottom: 50,
  },
});

export default styles;
