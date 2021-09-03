/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Text } from "native-base";
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class History extends React.Component {
  // Start Section Render
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section History */}
          <Box style={styles.box_text}>
            <Text style={styles.text_equation}>{this.props.Equation}</Text>
            <Text style={styles.text_answer}>{this.props.Answer}</Text>
          </Box>
          {/* End Section History */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
  // End Section Render
}
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Class

/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Style
const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    padding: 5,
  },

  box_text: {
    borderBottomColor: "#05adfa",
    borderBottomWidth: 2,
  },

  text_equation: {
    color: "#000",
    fontSize: 25,
    textAlign: "left",
  },

  text_answer: {
    color: "#05bdfa",
    fontSize: 30,
    textAlign: "left",
  },
});
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Style
