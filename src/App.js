import React from "react";
import "./App.css";
import Results from "./components/results";
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
      handleInput: this.handleChange,
      searchWord: ""
    };
  }

  handleBtnClick = props => {
    alert("alerted");
  };

  handleChange = props => {
    this.setState({
      searchWord: props
    });
    //search for the closest matching word using incomplete input from user
    if (Dictionary[props]) {
      console.log(Dictionary[props]);
    }
  };

  render() {
    return (
      <div className="dictionary">
        <form className="form-group">
          <Search props={this.state} />
          <Results />
        </form>
      </div>
    );
  }
}

export default App;
