import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Result from "./components/results";
import Search from "./components/search";
import Dictionary from "./totalenglishdictionary.js";
import levenshteinDistance from "./borrowed/levenshtein.js";

const ENTRIES = Object.getOwnPropertyNames(Dictionary).sort();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          grade: "1",
          toggled: false
        },
        {
          grade: "2",
          toggled: false
        },
        {
          grade: "3",
          toggled: false
        }
      ],
      gradeClick: this.handleGradeClick,
      handleInput: this.handleInput,
      searchWord: "",
      topResults: []
    };
  }

  handleGradeClick = props => {
    const newButtons = [...this.state.buttons];
    newButtons[props - 1].toggled = !newButtons[props - 1].toggled;
    this.setState({ buttons: newButtons });
    console.log(this.state.buttons[props - 1].toggled);
  };

  levenshtein = () => {
    let temp = [];
    for (let entry of ENTRIES) {
      let result = {
        searchResult: entry,
        value: levenshteinDistance(this.state.searchWord, entry)
      };
      temp.push(result);
    }
    return temp;
  };

  handleInput = props => {
    //search for matching word as user types
    this.setState({
      searchWord: props
    });

    let simpleResults = this.levenshtein();
    let topTenish = [];
    let topEntries = [];
    if (Dictionary[props]) {
      //if the entry exists, add the complete entry to the results
      this.setState({
        results: Dictionary[props]
      });
      topTenish = simpleResults.sort((a, b) => a.value - b.value).slice(0, 9);
      topEntries.push({
        //the exact match
        word: props,
        entry: Dictionary[props]
      });
    } else {
      topTenish = simpleResults.sort((a, b) => a.value - b.value).slice(0, 10);
      this.setState({
        results: [] //clears the pill
      });
    }
    for (let result of topTenish) {
      //extract all the entries from the Dictionary
      topEntries.push({
        word: result.searchResult,
        entry: Dictionary[result.searchResult]
      });
    }
    this.setState((state, props) => ({ topResults: topEntries }));
  };

  render() {
    return (
      <div className="dictionary container">
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
