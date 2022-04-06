import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Yvonne from "./components/Yvonne";
import Amy from "./components/Amy";
import Farhan from "../src/components/Farhan.js";
import AlexContainer from "./components/alex-container";
import Daniel from "./components/Daniel";
import API from "./screens/API";
import Alex from "./components/Alex";

function App() {

  const [localCase,setLocalCase] = useState([]);
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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home (Cases)</Link>
              </li>
              <li>
                <Link to="/Farhan">Vaccination status</Link>
              </li>
              <li>
                <Link to="/hospitalbed">Hospital Bed</Link>
              </li>
              <li>
                <Link to="/icu">ICU</Link>
              </li> 
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>        
            <Route path="/Farhan">
              <Farhan data={vac}/>
            </Route>
            <Route path="/hospitalbed">
              <Daniel data={util} />
            </Route>
            <Route path="/icu">
              <Alex data={icu} />
            </Route>
            <Route path="/">
            <Yvonne data={localCase} />
            </Route> 
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App