'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const ControlLabel = require('react-bootstrap/lib/ControlLabel');
const FormControl = require('react-bootstrap/lib/FormControl');
const Form = require('react-bootstrap/lib/Form');
const Button = require('react-bootstrap/lib/Button');

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    handleSubmit = () => {
        console.log(this.state.message);
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormControl value={this.state.message} onChange={this.handleChange} componentClass="textarea" placeholder="Message" />
                    <Button onClick={this.handleSubmit}>
                        Post
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

module.exports = PostForm;
