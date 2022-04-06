import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Yvonne from "./components/Yvonne";
import Amy from "./components/Amy";
import Farhan from "../src/components/Farhan.js";

function App() {
  return (
    <div className="App-header">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Yvonne">Yvonne</Link>
              </li>
              <li>
                <Link to="/Farhan">Vaccination status</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Yvonne">
              <Yvonne />
            </Route>
            <Route path="/Farhan">
              <Vaccinated />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
function Home() {
  return (
    <h2>
      <Amy />
    </h2>
  );
}

function Vaccinated() {
  return (
    <h2>
      <Farhan />
    </h2>
  );
}

function About() {
  return <Yvonne />;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
