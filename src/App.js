import React from "react";
import "./App.css";
import Result from "./components/results";
import Search from "./components/search";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./totalenglishdictionary.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [1, 2, 3],
      buttons2: [
        {
          grade: 1,
          backgroundColor: "#00BD80",
          toggled: false
        },
        {
          grade: 2,
          backgroundColor: "9D4399",
          toggled: false
        },
        {
          grade: 3,
          backgroundColor: "E46900",
          toggled: false
        }
      ],
      listItems: ["one", "two", "three"],
      gradeClick: this.handleGradeClick,
      handleInput: this.handleInput,
      searchWord: "",
      results: []
    };
  }

  handleGradeClick = props => {
    alert(props);
  };

  handleInput = props => {
    this.setState({
      searchWord: props
    });

    //search for the closest matching word using incomplete input from user
    if (Dictionary[props]) {
      //if the entry exists
      this.setState({
        results: Dictionary[props]
      });
    } else {
      //needed to clear the pill
      this.setState({
        results: []
      });
    }
  };

  render() {
    let listResults = [];
    /*
    for (let entry in this.state.results) {
      listResults.push(<Result props={entry} />);
    }
    */
    return (
      <div className="dictionary">
        <form className="form-group">
          <Search props={this.state} />
          {/*{listResults}*/}
          <Result props={this.state} />
        </form>
      </div>
    );
  }
}

export default App;
