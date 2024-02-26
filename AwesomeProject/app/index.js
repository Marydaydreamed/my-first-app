import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { getAuth } from "firebase/auth";
const Page = () => {
  const user = getAuth().currentUser;
  console.log("USER EMAIL", user?.email);

  return <Redirect href={"nevtreh"} />;
};

export default Page;

const styles = StyleSheet.create({});
