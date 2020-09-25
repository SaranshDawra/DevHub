import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Learn from "./components/Learn/Learn";
import Code from "./components/Code/Code";
import GetHired from "./components/GetHired/GetHired";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing}/>
                    <Route path="/learn" component={Learn} />
                    <Route path="/gethired" component={GetHired} />
                    <Route path="/code" component={Code} />
                </Switch>
            </Router>
        );
    }
}

export default App;
