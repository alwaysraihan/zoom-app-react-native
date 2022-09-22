import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
const ChatHeader = ({ showModal, setShowModal }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
        }}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{color:"white", fontSize:20,fontWeight:"700"}}>Close</Text>
      </TouchableOpacity>
      <Text style={{color:"white",fontSize:20,fontWeight:"700"}}>Chat</Text>
      <Entypo name="bell" size={25} color="#efefef" />
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingVertical:20,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#1c1c1c",
  },
});
