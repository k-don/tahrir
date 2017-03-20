'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PostForm = require('./post-form');

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <PostForm />
            </div>
        )
    }
}

module.exports = App;

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
