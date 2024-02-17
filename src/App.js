import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <Colum />
          </tr>
        </table>
      </div>
    );
  }
}

class Colum extends React.Component {
  render() {
    return (
      <div>
        <td>Data satu</td>
        <td>Data berikutnya</td>
      </div>
    );
  }
}

export default App;
