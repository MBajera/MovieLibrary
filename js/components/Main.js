import React from 'react'
import Navigation from "./Navigation";
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import List from "../containers/List";
import store from "../redux/store"
import {Provider} from "react-redux";
import MovieDetails from "../containers/MovieDetails";
import Watched from "../containers/Watched";
import ToWatch from "../containers/ToWatch";

const Main = () => {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={List}/>
                        <Route path="/movie/:id" component={MovieDetails}/>
                        <Route path="/watched" component={Watched}/>
                        <Route path="/to_watch" component={ToWatch}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}

export default Main;