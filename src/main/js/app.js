'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const rest = require('rest');

console.log('yes a back again again');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    componentDidMount() {
        rest('/api/greeting').then(response => {
            const {content} = JSON.parse(response.entity);
            this.setState({text: content});
        });
    }

    render() {
        return (
            <p>{this.state.text}</p>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);
