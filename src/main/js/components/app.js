'use strict';

import React from "react";
import Reflux from "reflux";
import PostForm from "./post-form";
import Navigator from "./navigator";
import Actions from "../actions/tahrir-api-actions";
import TahrirStore from "../stores/tahrir-api-store";

class App extends Reflux.Component {
    componentDidMount() {
        this.store = TahrirStore;
        Actions.getIdentity();
    }

    render() {
        return (
            <div className="app">
                <div className="content">
                    <Navigator />
                </div>
                <footer>
                    <PostForm />
                </footer>
            </div>
        )
    }
}

module.exports = App;
