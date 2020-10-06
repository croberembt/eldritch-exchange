import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar dark expand="md" className='bg-dark sticky-bottom'>
                <Nav navbar>
                    <div className="container">
                        <div className="row align-items-center">             
                            <div className="col">
                                <ul className="list-unstyled">
                                    <li className='text-white'><Link to='/home'>Home</Link></li>
                                    <li><Link to='/shop'>Shop</Link></li>
                                    <li><Link to='/aboutus'>About</Link></li>
                                    <li><Link to='/contactus'>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col">
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"/></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            </div>
                            <div className="col">
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> (313) 131-1313</a><br />
                            </div>
                            <div className="col">
                                <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> eldritchexchange@creepyemail.co</a>
                            </div>
                        </div>
                    </div>
                </Nav>
            </Navbar>
        );
    }
}

export default Footer;