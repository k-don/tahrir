'use strict';

import React from "react";
import PostForm from "./post-form";
import Navigator from "./navigator";
import Actions from "../actions/tahrir-api-actions";

class App extends React.Component {
    componentWillMount() {
        Actions.getIdentity();
    }

    render() {
        return (
            <div className="app">
                <Navigator />
                <PostForm />
            </div>
        )
    }
}

module.exports = App;
