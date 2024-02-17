import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// function Clicker() {
//   function handleClick(e) {
//     alert("Berhasil Mengclick");
//     e.preventDefault();
//   }

//   return (
//     <a href="" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

class Tanggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: true,
    };

    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.setState((state) => ({
      toggleStatus: !state.toggleStatus,
    }));
  }

  render() {
    return (
      <button onClick={this.handleCLick}>
        {this.state.toggleStatus ? "ON" : "OFF"}
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Tanggle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
