import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ChatHeader from "./ChatHeader";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ showModal, setShowModal }) => {
  const [message, setMessage] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c"}}>
      <SafeAreaView style={{ height: "100%" }}>
        <KeyboardAvoidingView
        //   behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
          <ChatHeader setShowModal={setShowModal} showModal={showModal} />
          {/* Chat Message  */}
          <View style={styles.chatMessages}>
            <Text style={{color:"white", textAlign:"center"}}>Hello</Text>
          </View>
          {/* typeMessages  */}
          <View style={styles.chatFormContainer}>
            <Text style={{ color: "white" }}>Send to: Everyone</Text>
            <View style={styles.chatForm}>
              <TextInput
                placeholderTextColor="#595859"
                style={styles.textInput}
                value={message}
                onChange={({ text }) => setMessage(text)}
                placeholder="Type here to Chat"
              />
              <TouchableOpacity
                style={{
                  backgroundColor: message ? "#0B71EB" : "#373838",
                  height: 40,
                  width: 40,
                  marginTop: 12,
                  marginLeft: 12,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <FontAwesome name={"send"} size={18} color="#efefef" />
              </TouchableOpacity>
            </View>
          </View>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatMessages: {
    flex: 1,
  },
  chatFormContainer: {
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
    justifyContent: "center",
  },
  chatForm: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  sendButton: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
