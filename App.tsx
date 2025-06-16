import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, Vibration } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const showAlert = () =>
  Alert.alert("Hello", undefined, [
    {
      text: "oopss",
      style: "destructive",
    },
  ]);

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            fontSize: 128,
            fontWeight: "bold",
          }}>
          XD
        </Text>
        <StatusBar style="auto" />

        <Button title="Vibrate" onPress={() => Vibration.vibrate(10000)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
