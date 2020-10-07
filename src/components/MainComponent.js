import React, { Component } from 'react';
import Shop from './ShopComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Jumbo from './JumbotronComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Background from '../backgrounds/pumpkin-head.jpg';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div className='container-fluid' style={{ backgroundImage: `url(${Background})`}}>
                <Header />
                <Jumbo />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/shop' render={() => <Shop />} />
                    <Route exact path='/contactus' render={() => <Contact />} />
                    <Route exact path='/aboutus' render={() => <About />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;