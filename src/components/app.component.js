import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions  from '../actions/index';

import Header from './header.component';
import Landing from './landing.component';

import Dashboard from './dashboard.component';
import SurveyNew  from './surveys/survey_new.component';

class App extends Component {
    componentDidMount() { // prefer life cycle for ajax callas
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surveys" exact component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default connect(null, actions)(App);