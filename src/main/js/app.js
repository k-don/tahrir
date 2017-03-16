'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

    render() {
        return (
            <p className="app">Hello, World!</p>
        )
    }
}

module.exports = App;

//ReactDOM.render(
//    <App />,
//    document.getElementById('react')
//);
