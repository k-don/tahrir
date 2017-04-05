'use strict';

import React from "react";
import Form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";
import Actions from "../actions/tahrir-api-actions";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {identity: {nickname: ''}}
    }

    handleChange = (e) => {
        this.setState({identity: {nickname: e.target.value}});
    };

    handleSubmit = () => {
        const {identity} = this.state;
        Actions.postIdentity(identity);
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <FormControl value={this.state.identity.nickname} onChange={this.handleChange} />
                    <Button onClick={this.handleSubmit}>
                        Create new user
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

module.exports = Login;
