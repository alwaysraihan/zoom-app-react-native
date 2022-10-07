import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const contactMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },

  {
    type: "contact",
    name: "Nurul Islam",
    photo: require("../../../assets/nurul.png"),
  },
  {
    type: "contact",
    name: "Jassica",
    photo: require("../../../assets/office.jpg"),
  },
  {
    type: "contact",
    name: "Raihan",
    photo: require("../../../assets/raihan.png"),
  },
];
const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      {contactMenuButtons.map((contact, index) => (
        <View style={styles.row} key={`contact_${index}`}>
          {/* Image  */}
          {contact.type === "starred" ? (
            <View style={styles.starIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          {/* Text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  starIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
