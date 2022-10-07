import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import StartMeeting from "../components/StartMeeting/StartMeeting";
import { Camera } from "expo-camera";
import io from "socket.io-client";
import VideoCallMenuButton from "../components/VideoCalling/VideoCallMenuButton";
import Chat from "../components/VideoCalling/Chat";
const socket = io("https://ed19-203-190-14-129.in.ngrok.io/", {
  transports: ["websocket"],
});

const MeetingRoom = ({ navigation }) => {
  const [name, setName] = useState("");
  const [startCamera, setStartCamera] = useState(false);
  const [activeUsers, setActiveUsers] = useState(["Raihan"]);
  const [meetId, setMeetId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleStartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };
  const joinRoom = () => {
    handleStartCamera();
    socket.emit("join-room", { roomId: meetId, userName: name });
  };
  useEffect(() => {
    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", (users) => {
      setActiveUsers(users);
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c" }}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={showModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed!");
              setShowModal(!showModal);
            }}
          >
           <Chat
           setShowModal={setShowModal} 
           showModal={showModal}
           />
          </Modal>
          {/* Active users section  */}
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length <= 1 ? "100%" : 200,
                  height: activeUsers.length <= 1 ? 600 : 200,
                }}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((user, index) => (
                  <View
                    key={`activeUser_${index}`}
                    style={styles.activeUserContainer}
                  >
                    <Text style={{ color: "white" }}>{user?.userName}</Text>
                  </View>
                ))}
            </View>
          </View>

          <View style={styles.menu}>
            <VideoCallMenuButton showModal={showModal} setShowModal={setShowModal} navigation={navigation} />
           

          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          meetId={meetId}
          setMeetId={setMeetId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: 15,
  },
  textTitle: {
    color: "white",
    marginTop: 10,
  },
  cameraContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  activeUserContainer: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
