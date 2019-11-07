import React from "react";
import "./App.css";
import Results from "./components/results";
import Search from "./components/search";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [1, 2, 3]
    };
  }

  handleClick = props => {
    console.log(props);
  };

  render() {
    console.log(this.state);
    return (
      <div className="dictionary">
        <form className="form-group">
          <Search onClick={this.handleClick} />
          <Results />
        </form>
      </div>
    );
  }
}

export default App;
