import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Localcase from "./components/Localcase.js";
import Vac from "./components/Vac.js";
import Util from "./components/Util.js";
import API from "./screens/API";
import Icu from "./components/Icu.js";
import Home from "../src/components/Home.js";
import "../src/index.css";

/*
  App.js responsibilities:
  1. Data polling and pass filtered data to children component
  2. Routing defined
*/
function App() {
  const [localCase, setLocalCase] = useState([]);
  const [vac, setVac] = useState([]);
  const [icu, setIcu] = useState([]);
  const [util, setUtil] = useState([]);

  // On component mount, load these data.
  useEffect(() => {
    getAsyncData1();
    getAsyncData2();
    getAsyncData3();
    getAsyncData4();
  }, []);

  const getAsyncData1 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15"
    );
    if (resp.status === 200) {
      console.log(resp);
      setLocalCase(resp.data.result.records);
    }
  };
  const getAsyncData2 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=9ec89dc0-cb6b-4604-aaff-382d5e850206"
    );
    if (resp.status === 200) {
      console.log(resp);
      setVac(resp.data.result.records);
    }
  };

  const getAsyncData3 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=783f0c4c-caf7-4818-8683-760f3d7f0757"
    );
    if (resp.status === 200) {
      console.log(resp);
      setIcu(resp.data.result.records);
    }
  };

  const getAsyncData4 = async () => {
    const resp = await API.get(
      "/api/action/datastore_search?resource_id=b5ae6ad5-1272-41f4-a4e5-23308ad6e32d"
    );
    if (resp.status === 200) {
      console.log(resp);
      setUtil(resp.data.result.records);
    }
  };

  return (
    <div className="App-header">
      <Router>
        <div class="tab-selection">
          <div>Covid-19</div>
          <div>
            <NavLink to="/home" activeClassName="current">
              Home (Overview)
            </NavLink>
          </div>
          <div>
            <NavLink to="/localcases" activeClassName="current">
              Local Cases
            </NavLink>
          </div>
          <div>
            <NavLink to="/vaccinationstatus" activeClassName="current">
              Vaccination status
            </NavLink>
          </div>
          <div>
            <NavLink to="/hospitalbed" activeClassName="current">
              Hospital Bed
            </NavLink>
          </div>
          <div>
            <NavLink to="/icu" activeClassName="current">
              ICU
            </NavLink>
          </div>
        </div>
        <p class="tab-container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/vaccinationstatus">
              <Vac data={vac} />
            </Route>
            <Route path="/hospitalbed">
              <Util data={util} />
            </Route>
            <Route path="/icu">
              <Icu data={icu} />
            </Route>
            <Route path="/localcases">
              <Localcase data={localCase} />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </p>
      </Router>
    </div>
  );
}

export default App;
