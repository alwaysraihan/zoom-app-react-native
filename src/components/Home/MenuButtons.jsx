import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const buttonItems = [
  {
    id: 1,
    name: "video-camera",
    title: "Meeting",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share",
  },
];
const MenuButtons = ({ navigation }) => {
  const openMeeting = () => {
    navigation.navigate("MeetingRoom");
  };
  return (
    <View style={styles.container}>
      {buttonItems.map((btn, index) => (
        <View style={styles.buttonContainer} key={`btn_${index}`}>
          {/* <TouchableOpacity
            style={{
             ...styles.button,
              backgroundColor: btn.customColor?btn.customColor: "#0470DC",
            }}
          > */}
          <TouchableOpacity onPress={() => openMeeting()} style={styles.button}>
            <FontAwesome name={btn.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{btn.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
