import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import DisplayMath from "./DisplayMath";

class App extends Component {
    render() {
        return (
            <div>
                <span>App.js</span>
                <Switch>
                    <Route path="/play" component={DisplayMath} />
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        );
    }
}

export default App;
