/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { NativeBaseProvider, Box, Button, FlatList, Text } from "native-base";
import { styles } from "./Css/CssApp";
import { Ionicons } from "@expo/vector-icons";
import History from "./Components/History";
/////////////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  // Start Section Constructor
  constructor() {
    super();
    this.FuncSetCursor();
  }
  // End Section Constructor

  // Start Section State
  state = {
    Equation: "",
    OpacityCursor: "1",
    TextHistory: "تاریخچه",
    PositionHistory: "-100%",
    data: [],
  };
  // End Section State

  // Start Section Functions
  FuncSetCursor() {
    setInterval(() => {
      if (this.state.OpacityCursor === 1) {
        this.setState({
          OpacityCursor: "0",
        });
      } else {
        this.setState({
          OpacityCursor: "1",
        });
      }
    }, 1000);
  }

  FuncBackspace() {
    try {
      if (this.state.Equation !== "") {
        let Equation = this.state.Equation.substr(
          0,
          this.state.Equation.length - 1
        );

        this.setState({
          Equation: Equation,
        });
      }
    } catch (err) {}
  }

  FuncHistory() {
    if (this.state.TextHistory === "تاریخچه") {
      this.setState({
        TextHistory: "صفحه کلید",
        PositionHistory: "0%",
      });
    } else {
      this.setState({
        TextHistory: "تاریخچه",
        PositionHistory: "-100%",
      });
    }
  }

  FuncClearHistory() {
    this.setState({
      data: [],
    });
  }

  FuncClearNumber() {
    if (this.state.Equation !== "") {
      this.setState({
        Equation: "",
      });
    }
  }

  FuncPercentSign() {
    if (this.state.Equation !== "") {
      let ReplaceEquation = this.state.Equation.replace("%%", "")
        .replace("%+", "")
        .replace("%-", "")
        .replace("%*", "")
        .replace("%/", "")
        .replace("%.", "");

      this.setState({
        Equation: ReplaceEquation + "%",
      });
    }
  }

  FuncDivision() {
    if (this.state.Equation !== "") {
      let ReplaceEquation = this.state.Equation.replace("/%", "")
        .replace("/+", "")
        .replace("/-", "")
        .replace("/*", "")
        .replace("//", "")
        .replace("/.", "");

      this.setState({
        Equation: ReplaceEquation + "/",
      });
    }
  }

  FuncAddNumberSeven() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "7",
    });
  }

  FuncAddNumberEight() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "8",
    });
  }

  FuncAddNumberNine() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "9",
    });
  }

  FuncMultiplication() {
    if (this.state.Equation !== "") {
      let ReplaceEquation = this.state.Equation.replace("*%", "")
        .replace("*+", "")
        .replace("*-", "")
        .replace("**", "")
        .replace("*/", "")
        .replace("*.", "");

      this.setState({
        Equation: ReplaceEquation + "*",
      });
    }
  }

  FuncAddNumberFour() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "4",
    });
  }

  FuncAddNumberFive() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "5",
    });
  }

  FuncAddNumberSix() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "6",
    });
  }

  FuncMines() {
    if (this.state.Equation !== "") {
      let ReplaceEquation = this.state.Equation.replace("-%", "")
        .replace("-+", "")
        .replace("--", "")
        .replace("-*", "")
        .replace("-/", "")
        .replace("-.", "");

      this.setState({
        Equation: ReplaceEquation + "-",
      });
    }
  }

  FuncAddNumberOne() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "1",
    });
  }

  FuncAddNumberTwo() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "2",
    });
  }

  FuncAddNumberThree() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "3",
    });
  }

  FuncPlus() {
    if (this.state.Equation !== "") {
      let ReplaceEquation = this.state.Equation.replace("+%", "")
        .replace("++", "")
        .replace("+-", "")
        .replace("+*", "")
        .replace("+/", "")
        .replace("+.", "");

      this.setState({
        Equation: ReplaceEquation + "+",
      });
    }
  }

  FuncMinesBeforeNumbers() {
    if (this.state.Equation === "") {
      let ReplaceEquation = this.state.Equation.replace("-%", "")
        .replace("-+", "")
        .replace("--", "")
        .replace("-*", "")
        .replace("-/", "")
        .replace("-.", "");

      this.setState({
        Equation: ReplaceEquation + "-",
      });
    }
  }

  FuncAddNumberZero() {
    let Equation = this.state.Equation;
    this.setState({
      Equation: Equation + "0",
    });
  }

  FuncDecimal() {
    let ReplaceEquation = this.state.Equation.replace(".%", "")
      .replace(".+", "")
      .replace(".-", "")
      .replace(".*", "")
      .replace("./", "")
      .replace("..", "");

    this.setState({
      Equation: ReplaceEquation + ".",
    });
  }

  FuncEval() {
    try {
      if (this.state.Equation !== "") {
        let Equation = this.state.Equation;
        let Answer = eval(this.state.Equation);
        let data = { Equation: `${Equation}`, Answer: `${Answer}` };
        this.setState((PrevState) => {
          return {
            Equation: `${Answer}`,
            data: [...PrevState.data, data],
          };
        });
      }
    } catch (err) {}
  }
  // End Section Functions

  // Start Section Render
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Calculate */}
          <Box name="Box_Calculator" style={styles.box_calculator}>
            <Box></Box>

            <Box style={styles.box_cursor_equation}>
              <Text style={styles.text_equation}>{this.state.Equation}</Text>
              <Box
                name="Box_Cursor"
                style={styles.box_cursor}
                opacity={this.state.OpacityCursor}
              ></Box>
            </Box>

            <Box style={styles.box_button_calculator}>
              <Button
                onPress={() => {
                  this.FuncBackspace();
                }}
                style={styles.button_backspace}
                variant="outline"
              >
                <Ionicons
                  style={styles.icon_backspace}
                  name="backspace-outline"
                />
              </Button>

              <Button
                onPress={() => {
                  this.FuncHistory();
                }}
                style={styles.button_history}
                variant="outline"
              >
                <Text style={styles.text_history}>
                  {this.state.TextHistory}
                </Text>
              </Button>
            </Box>
          </Box>
          {/* End Section Calculate */}

          {/* Start Section Buttons */}
          <Box name="Box_Buttons" style={styles.box_buttons}>
            <Box name="Box_Row_Buttons" style={styles.box_row_buttons}>
              <Box style={styles.box_button_row_one_one}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncClearNumber();
                  }}
                >
                  <Text style={styles.text_button_number_clear}>C</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_one_two}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncPercentSign();
                  }}
                >
                  <Text style={styles.text_button_number_percent_sign}>%</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_one_three}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncDivision();
                  }}
                >
                  <Text style={styles.text_button_number_division}>/</Text>
                </Button>
              </Box>
            </Box>

            <Box name="Box_Row_Buttons" style={styles.box_row_buttons}>
              <Box style={styles.box_button_row_two}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberSeven();
                  }}
                >
                  <Text style={styles.text_button_number}>7</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_two}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberEight();
                  }}
                >
                  <Text style={styles.text_button_number}>8</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_two}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberNine();
                  }}
                >
                  <Text style={styles.text_button_number}>9</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_two}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncMultiplication();
                  }}
                >
                  <Text style={styles.text_button_number_multiplication}>
                    x
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box name="Box_Row_Buttons" style={styles.box_row_buttons}>
              <Box style={styles.box_button_row_three}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberFour();
                  }}
                >
                  <Text style={styles.text_button_number}>4</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_three}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberFive();
                  }}
                >
                  <Text style={styles.text_button_number}>5</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_three}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberSix();
                  }}
                >
                  <Text style={styles.text_button_number}>6</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_three}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncMines();
                  }}
                >
                  <Text style={styles.text_button_number_mines}>-</Text>
                </Button>
              </Box>
            </Box>

            <Box name="Box_Row_Buttons" style={styles.box_row_buttons}>
              <Box style={styles.box_button_row_four}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberOne();
                  }}
                >
                  <Text style={styles.text_button_number}>1</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_four}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberTwo();
                  }}
                >
                  <Text style={styles.text_button_number}>2</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_four}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberThree();
                  }}
                >
                  <Text style={styles.text_button_number}>3</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_four}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncPlus();
                  }}
                >
                  <Text style={styles.text_button_number_plus}>+</Text>
                </Button>
              </Box>
            </Box>

            <Box name="Box_Row_Buttons" style={styles.box_row_buttons}>
              <Box style={styles.box_button_row_five}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncMinesBeforeNumbers();
                  }}
                >
                  <Text style={styles.text_button_number}>+/-</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_five}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncAddNumberZero();
                  }}
                >
                  <Text style={styles.text_button_number}>0</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_five}>
                <Button
                  style={styles.button_number}
                  variant="outline"
                  onPress={() => {
                    this.FuncDecimal();
                  }}
                >
                  <Text style={styles.text_button_number}>.</Text>
                </Button>
              </Box>

              <Box style={styles.box_button_row_five}>
                <Button
                  style={styles.button_number}
                  onPress={() => {
                    this.FuncEval();
                  }}
                >
                  <Text style={styles.text_button_number_equal}>=</Text>
                </Button>
              </Box>
            </Box>
          </Box>
          {/* End Section Buttons */}

          {/* Start Section History */}
          <Box
            name="Box_History"
            style={styles.box_history}
            right={this.state.PositionHistory}
          >
            <Box style={styles.box_flatlist_history}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <History
                    Equation={item.Equation}
                    Answer={item.Answer}
                  ></History>
                )}
              ></FlatList>
            </Box>

            <Box style={styles.box_button_clear_history}>
              <Button
                onPress={() => {
                  this.FuncClearHistory();
                }}
                style={styles.button_clear_history}
                variant="outline"
              >
                <Text style={styles.text_clear_history}>پاک کردن تاریخچه</Text>
              </Button>
            </Box>
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
