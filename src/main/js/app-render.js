'use strict';

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app"

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
