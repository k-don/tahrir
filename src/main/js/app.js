'use strict';

import React from "react";
import ReactDOM from "react-dom";
import PostForm from "./components/post-form";
import MicroblogPage from "./components/microblog-page";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MicroblogPage />
                <PostForm />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react')
);

module.exports = App;
