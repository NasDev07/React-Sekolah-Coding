import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todosItem],
      todosItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todosItem: event.target.value,
    });
    console.log(this.state.todosItem);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todosItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
