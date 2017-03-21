'use strict';

const React = require('react');
const FormGroup = require('react-bootstrap/lib/FormGroup');
const FormControl = require('react-bootstrap/lib/FormControl');
const Form = require('react-bootstrap/lib/Form');
const Button = require('react-bootstrap/lib/Button');
const Actions = require('../actions/tahrir-api-actions');
// TODO we can remove this after we have another component that uses the store
const Reflux = require('reflux');
const TahrirStore = require('../stores/tahrir-api-store');

class PostForm extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.store = TahrirStore;
    }

    handleSubmit = () => {
        const {message} = this.state;
        Actions.postBroadcastMessage(message);
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    render() {
        return (
            <Form inline>
                <FormGroup>
                    <FormControl value={this.state.message} onChange={this.handleChange}
                                 componentClass="textarea" placeholder="Message" />
                    <Button bsStyle="primary" onClick={this.handleSubmit}>
                        Post
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}

module.exports = PostForm;
