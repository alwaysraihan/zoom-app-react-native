import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Home/Header";
import SearchBar from "../components/Home/SearchBar";
import MenuButtons from "../components/Home/MenuButtons";
import ContactMenu from "../components/Home/ContactMenu";

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height:'100%'}}>

      {/* Header */}
      <Header />
      {/* SearchBar  */}
      <SearchBar />
      {/* Menu Buttons*/}
      <MenuButtons />
      {/* Contacts Menu */}
      <ContactMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#1c1c1c",
    padding:15,

  }
});
