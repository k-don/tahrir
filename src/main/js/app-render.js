'use strict';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"

require('../resources/static/scss/main.scss');

class AppRender extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

ReactDOM.render(
    <AppRender />,
    document.getElementById('react')
);
