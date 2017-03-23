'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PostForm = require('./components/post-form');
const MicroblogPage = require('./components/microblog-page');

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
