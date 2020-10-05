import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Shop from './ShopComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Eldritch Exchange</NavbarBrand>
                    </div>
                </Navbar>
                <Shop />
            </div>
        );
    };
}

export default Main;