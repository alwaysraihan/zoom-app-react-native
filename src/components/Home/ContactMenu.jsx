import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
const contactMenuButtons = [
  {
    type: "starred",
    
    
  },
  {
    type: "contact",
    name:"Raihan Sarkar",
    photo:require("../../../assets/raihan.png")

  },
  {
    type: "contact",
    name:"Nurul Islam",
    photo:require("../../../assets/nurul.png")

  },
  {
    type: "contact",
    name:"Jassica",
    photo:require("../../../assets/office.jpg")

  },
];
const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      <View style={styles.row}>
        {/* Image  */}
        <View style={styles.starIcon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        {/* Text */}
        <Text style={styles.text}>Starred</Text>
      </View>
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
});
