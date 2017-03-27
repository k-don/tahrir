'use strict';

import React from "react";
import PostForm from "./post-form";
import Navigator from "./navigator";

class App extends React.Component {
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
