import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

// semua komponen ada disini
import HomePage from "../src/components/HomePage";
import ListPage from "../src/components/ListPage";
import CreatePage from "../src/components/CreatePage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <div className="container">
            <Link to="/" className="brand-logo">
              Home
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/list">List</Link>
              </li>
              <li>
                <Link to="/create">New</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <h3>React Catatan</h3>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/list" component={ListPage}></Route>
          <Route path="/create" component={CreatePage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
