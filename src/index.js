import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ContactList from './ContactList';

class App extends Component {

    state = { contacts: [] };


    componentDidMount() {
        fetch('http://localhost:4000/contacts/')
        .then(resp=>resp.json())
        .then(data=>this.setState({contacts: data}));
    }

    render() {
        return (<div className="container">
            <h1 className="alert alert-info">Using AJAX for getting data from REST endpoint</h1>

            <div className="row">
                <div className="col">
                    <ContactList contacts={this.state.contacts} />
                </div>
                <div className="col"></div>
            </div>



        </div>);
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
