import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import { Button } from 'react-bootstrap';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.createExpense = this.createExpense.bind(this);
    }

    createExpense() {
        axios.post('/expenses',
            querystring.stringify({
                description: 'nekooo',
                amount: 32432,
                month: 'Sep',
                year: 2009
            }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        /*axios.get('/expenses')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });*/
    }

    render() {
        return (
            <div>
                <h1>Hello, Jose</h1>
                <Button bsStyle="primary" bsSize="small" onClick={this.createExpense}>Click This</Button>
            </div>
        )
    }
}