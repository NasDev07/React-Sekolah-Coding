import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//  STATE
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  // LifeCycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    clearInterval(this.addInterval);
  }

  increase() {
    // update state time seiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <div>{this.state.time} Detik</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0" />
      </header>
    </div>
  );
}

export default App;
