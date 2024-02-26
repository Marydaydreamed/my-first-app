import {
  Animated,
  Button,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
const trexImg = require("../../assets/img/trex1.png");
const Trex = () => {
  const [started, setStarted] = useState(false);
  const move = (what, toValue, duration = 320) => {
    return Animated.timing(what, {
      toValue: toValue,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: false,
    });
  };
  const jump = () => {
    move(trexY, -150).start();
    setTimeout(() => {
      move(trexY, 0).start();
    }, 200);
  };

  const start = () => {
    Animated.loop(move(objX, -450, 1300)).start();
  };
  const trexY = new Animated.Value(0);
  const objX = new Animated.Value(0);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "red",
      }}
      onTouchStart={jump}
    >
      <TouchableOpacity
        onPress={start}
        style={{
          top: 50,
          left: "40%",
          position: "absolute",
          height: 40,
          width: 100,
          borderWidth: 1,
          paddingVertical: 10,
        }}
      >
        <Text style={{ textAlign: "center" }}>Restart</Text>
      </TouchableOpacity>

      <Animated.View
        style={{
          height: 40,
          width: 40,
          left: "10%",
          bottom: "40%",
          position: "absolute",
          transform: [{ translateY: trexY }],
        }}
      >
        <Image source={trexImg} style={{ height: 40, width: 40 }} />
      </Animated.View>
      <Animated.View
        style={{
          height: 40,
          width: 40,
          left: "110%",
          bottom: "40%",
          position: "absolute",
          backgroundColor: "black",
          transform: [{ translateX: objX }],
        }}
      ></Animated.View>
    </View>
  );
};

export default Trex;

const styles = StyleSheet.create({});
