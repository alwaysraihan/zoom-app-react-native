import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StartMeeting = ({ name, setName, meetId, setMeetId, joinRoom }) => {
  return (
    <View>
      <View className="">
        <View
          style={styles.info}
          className="w-full bg-[#373538] border-[#484648] "
        >
          <TextInput
            value={name}
            placeholder="Enter name"
            onChangeText={(text) => setName(text)}
            className="text-white "
            style={styles.textInput}
          />
        </View>
        <View
          style={styles.info}
          className="w-full bg-[#373538] border-[#484648] "
        >
          <TextInput
            value={meetId}
            placeholder="Enter meeting ID"
            onChangeText={(text) => setMeetId(text)}
            className="text-white"
            style={styles.textInput}
          />
        </View>
        <View className="justify-center items-center">
          <TouchableOpacity
            style={{ width: 350, height: 50, borderRadius: 15, marginTop: 20 }}
            className="bg-[#0470DC]  justify-center items-center"
            onPress={() => {
              joinRoom();
            }}
          >
            <Text className=" text-white font-bold text-lg ">
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    padding: 12,
    height: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    fontSize: 18,
  },
});
