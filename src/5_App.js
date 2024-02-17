import "./App.css";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Halaman Home</h2>;
}

function ListView() {
  return (
    <div>
      <h2>Semua User</h2>
      <ul>
        <Link to="user/nanas">Nanas</Link>
        <br />
        <Link to="user/dila">Dila</Link>
      </ul>
    </div>
  );
}

function DetailView({ match }) {
  return (
    <div>
      <h2>Ini Halaman User {match.params.name}</h2>
    </div>
  );
}

function NoMatch() {
  return <h4>404, Halaman Tidak Ditemukan</h4>;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </nav>

          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<ListView />} />
              <Route path="/user/:name" element={<DetailView />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
