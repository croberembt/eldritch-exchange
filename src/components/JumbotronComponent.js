import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Jumbo extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className='header bg-secondary container-fluid'>
                <Jumbotron fluid className='bg-secondary'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <h1>Eldritch Exchange</h1>
                                <h2>Where It's Always Halloween</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Jumbo;