import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar expand="md" className='sticky-bottom justify-content-center' style={{ padding: '1rem', background: 'transparent' }}> 
                <Nav navbar>
                    <div className="container">
                        <div className='row'>             
                            <div className="col" style={{marginRight: '3rem'}}>
                                <ul className="list-unstyled">
                                    <li><Link style={{ color: 'white' }} to='/home'>Home</Link></li>
                                    <li><Link style={{ color: 'white' }} to='/shop'>Shop</Link></li>
                                    <li><Link style={{ color: 'white' }} to='/aboutus'>About</Link></li>
                                    <li><Link style={{ color: 'white' }} to='/contactus'>Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col" style={{marginLeft: '3rem', marginRight: '3rem'}}>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"/></a>{' '}
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                                <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            </div>
                            <div className="col" style={{marginLeft: '3rem', marginRight: '3rem'}}>
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> (313) 131-1313</a><br />
                            </div>
                            <div className="col" style={{marginLeft: '3rem'}}>
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