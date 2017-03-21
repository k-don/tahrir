'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PostForm = require('./components/post-form');

class App extends React.Component {
    render() {
        return (
            <div className="app">
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
