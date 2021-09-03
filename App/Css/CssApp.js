/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import { StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Style
const styles = StyleSheet.create({
  //////////////////////////////// Start Style App
  app: {
    width: "100%",
    height: "100%",
  },
  //////////////////////////////// End Style App

  //////////////////////////////// Start Style Calculate
  box_calculator: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eee",
  },

  box_cursor_equation: {
    width: "100%",
    height: "20%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 5,
  },

  text_equation: {
    fontSize: 25,
    color: "#000",
  },

  box_cursor: {
    width: 4,
    height: 50,
    backgroundColor: "#05bdfa",
  },

  box_button_calculator: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button_backspace: {
    width: "25%",
    height: "100%",
    borderColor: "#aaa",
    borderWidth: 2,
    borderRadius: 0,
  },

  icon_backspace: {
    fontSize: 40,
    color: "#000",
  },

  button_history: {
    width: "80%",
    height: "100%",
    borderColor: "#aaa",
    borderWidth: 2,
    borderRadius: 0,
  },

  text_history: {
    color: "#000",
    fontSize: 30,
  },
  //////////////////////////////// Start Style Calculate

  //////////////////////////////// Start Style Buttons
  box_buttons: {
    width: "100%",
    height: "60%",
  },

  box_row_buttons: {
    width: "100%",
    height: "20%",
    flexDirection: "row-reverse",
  },

  box_button_row_one_one: {
    width: "50%",
    height: "100%",
  },

  box_button_row_one_two: {
    width: "25%",
    height: "100%",
  },

  box_button_row_one_three: {
    width: "25%",
    height: "100%",
  },

  box_button_row_two: {
    width: "25%",
    height: "100%",
  },

  box_button_row_three: {
    width: "25%",
    height: "100%",
  },

  box_button_row_four: {
    width: "25%",
    height: "100%",
  },

  box_button_row_five: {
    width: "25%",
    height: "100%",
  },

  button_number: {
    width: "100%",
    height: "100%",
    borderColor: "#aaa",
    borderRadius: 0,
  },

  text_button_number_clear: {
    color: "#f55",
    fontSize: 35,
  },

  text_button_number_percent_sign: {
    color: "#05bdfa",
    fontSize: 35,
  },

  text_button_number_division: {
    color: "#05bdfa",
    fontSize: 35,
  },

  text_button_number_multiplication: {
    color: "#05bdfa",
    fontSize: 35,
  },

  text_button_number_mines: {
    color: "#05bdfa",
    fontSize: 50,
  },

  text_button_number_plus: {
    color: "#05bdfa",
    fontSize: 35,
  },

  text_button_number_equal: {
    color: "#fff",
    fontSize: 35,
  },

  text_button_number: {
    color: "#000000",
    fontSize: 30,
  },
  //////////////////////////////// End Style Buttons

  //////////////////////////////// Start Style History
  box_history: {
    position: "absolute",
    bottom: 0,
    width: "75%",
    height: "60%",
    backgroundColor: "#ccc",
  },

  box_flatlist_history: {
    width: "100%",
    height: "90%",
  },

  box_button_clear_history: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 3,
    borderTopColor: "#aaa",
  },

  button_clear_history: {
    width: "100%",
    height: "100%",
    borderWidth: 0,
  },

  text_clear_history: {
    fontSize: 22,
    color: "#000",
  },
  //////////////////////////////// End Style History
});
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Style
export { styles };
