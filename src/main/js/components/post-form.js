'use strict';

import React from "react";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Form from "react-bootstrap/lib/Form";
import Button from "react-bootstrap/lib/Button";
import Actions from "../actions/tahrir-api-actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    handleSubmit = () => {
        const {message} = this.state;
        Actions.postBroadcastMessage(message);
        this.setState({message: ''});
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    render() {
        return (
            <footer className="post-form">
                <Form inline>
                    <FormGroup>
                        <FormControl value={this.state.message} onChange={this.handleChange}
                                     placeholder="Message" />
                        <Button onClick={this.handleSubmit}>
                            Post
                        </Button>
                    </FormGroup>
                </Form>
            </footer>
        )
    }
}

module.exports = PostForm;
