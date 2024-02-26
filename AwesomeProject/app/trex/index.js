import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Trex from "../../src/components/lesson/Trex";

const TrexScreen = () => {
  return (
    <View style={styles.container}>
      <Trex />
    </View>
  );
};

export default TrexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
