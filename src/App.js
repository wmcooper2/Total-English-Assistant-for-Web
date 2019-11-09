import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Result from "./components/results";
import Search from "./components/search";
import Dictionary from "./totalenglishdictionary.js";
import levenshteinDistance from "./borrowed/levenshtein.js";
import { tsOptionalType } from "@babel/types";

const ENTRIES = Object.getOwnPropertyNames(Dictionary).sort();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          grade: 1,
          toggled: false
        },
        {
          grade: 2,
          toggled: false
        },
        {
          grade: 3,
          toggled: false
        }
      ],
      gradeClick: this.handleGradeClick,
      handleInput: this.handleInput,
      searchWord: "",
      results: [],
      topResults: []
    };
  }

  handleGradeClick = props => {
    const newButtons = [...this.state.buttons];
    newButtons[props - 1].toggled = !newButtons[props - 1].toggled;
    this.setState({ buttons: newButtons });
    console.log(this.state.buttons[props - 1].toggled);
  };

  handleInput = props => {
    //update the searchWord for each key press
    this.setState({
      searchWord: props
    });

    //search for matching word as user types
    let levenshteinResults = [];
    for (let entry of ENTRIES) {
      let result = {
        searchResult: entry,
        value: levenshteinDistance(this.state.searchWord, entry)
      };
      levenshteinResults.push(result);
    }

    let topTenish = [];
    let topEntries = [];
    if (Dictionary[props]) {
      //if the entry exists, add the complete entry to the results
      this.setState({
        results: Dictionary[props]
      });
      let allResults = levenshteinResults.sort((a, b) => a.value - b.value);
      topTenish = allResults.slice(0, 9);
      //extract all the entries from the Dictionary
      topEntries.push({
        //the exact match
        word: props,
        entry: Dictionary[props]
      });
      for (let result of topTenish) {
        //all the others
        topEntries.push({
          word: result.searchResult,
          entry: Dictionary[result.searchResult]
        });
      }
      console.log(topEntries);
    } else {
      //needed to clear the pill when exact match not found
      let allResults = levenshteinResults.sort((a, b) => a.value - b.value);
      topTenish = allResults.slice(0, 10);
      this.setState({
        results: [],
        topResults: topTenish
      });
    }
  };

  render() {
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
