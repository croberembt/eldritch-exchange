import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">             
                        <div className="col-5 col-sm-2 offset-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/shop'>Shop</Link></li>
                                <li><Link to='/aboutus'>About</Link></li>
                                <li><Link to='/contactus'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-5 col-sm-3 text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"/></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        </div>
                        <div className="col-sm-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> (313) 131-1313</a><br />
                            <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> eldritchexchange@creepyemail.co</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;