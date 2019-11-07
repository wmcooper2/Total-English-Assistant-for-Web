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
      listItems: ["one", "two", "three"],
      click: this.handleBtnClick,
      handleInput: this.handleInput,
      searchWord: "",
      results: []
    };
  }

  handleBtnClick = props => {
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
