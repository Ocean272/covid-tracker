import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Alex from "../componentsTwo/AlexTwo";
import Yvonne from "../componentsTwo/YvonneTwo";
import Farhan from "../componentsTwo/FarhanTwo";
import Daniel from "../componentsTwo/DanielTwo";
import Overview from "../componentsTwo/Home"

function HomePage() {
    return(
        <Router>
            <div class="tab-selection">
            <div>Covid-19</div>
                <div>
                    <Link to ="/Home" className="current">Overview</Link>
                </div>
                <div>
                    <Link to ="/Yvonne">Active Cases</Link>
                </div>
                <div>
                    <Link to ="/Alex">Deceased</Link>
                </div>
                <div>
                    <Link to ="/Daniel">Recovered</Link>
                </div>
                <div>
                    <Link to ="/Farhan">Discharged</Link>
                </div>
            </div>
            <p class="tab-container">
                <Switch>
                    <Route path="/Home">
                        <Overview />
                    </Route>
                    <Route path="/Yvonne">
                        <Yvonne />
                    </Route>
                    <Route path="/Alex">
                        <Alex />
                    </Route>
                    <Route path="/Daniel">
                        <Daniel />
                    </Route>
                    <Route path="/Farhan">
                        <Farhan />
                    </Route>
                </Switch>
            </p>
        </Router>
    )
}

export default HomePage