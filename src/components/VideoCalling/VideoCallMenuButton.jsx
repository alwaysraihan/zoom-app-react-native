import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const buttonItems = [
  {
    id: 1,
    name: "microphone",
    title: "Mute",
    customColor: "#efefef",
  },
  {
    id: 2,
    name: "video-camera",
    title: "Stop",
  },
  {
    id: 3,
    name: "upload",
    title: "Share",
  },
  {
    id: 4,
    name: "group",
    title: "Participants",
  },
];
const VideoCallMenuButton = ({ showModal, setShowModal, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {buttonItems.map((btn, index) => (
          <TouchableOpacity
            key={`video_btn_${index}`}
            onPress={() => openMeeting()}
            style={styles.button}
          >
            <FontAwesome name={btn.name} size={24} color={"#fefefe"} />
            <Text style={styles.menuText}>{btn.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => setShowModal(!showModal)}
          style={styles.button}
        >
          <FontAwesome name={"comment"} size={24} color={"#fefefe"} />
          <Text style={styles.menuText}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VideoCallMenuButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 1,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    flexDirection: "row",
  },
  button: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
