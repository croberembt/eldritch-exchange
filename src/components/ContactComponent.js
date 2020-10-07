import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: true,
            contactType: 'Email',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Your answers: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row" style={{paddingTop: '1rem'}}>
                    <h2>Send Us A Message</h2>
                </div>
                <Form onSubmit={this.handleSubmit} style={{paddingBottom: '3rem', paddingTop: '2rem'}}>
                    <FormGroup row style={{marginBottom: '2rem'}}>
                        <Col lg='5'>
                            <Input type="text" id="firstName" name="firstName"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: '2rem'}}>
                        <Col lg='5'>
                            <Input type="text" id="lastName" name="lastName"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.handleInputChange} />
                        </Col>                        
                    </FormGroup>
                    <FormGroup row style={{marginBottom: '2rem'}}>   
                        <Col lg='5'>
                            <Input type="tel" id="phoneNum" name="phoneNum"
                                placeholder="Phone Number"
                                value={this.state.phoneNum}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: '2rem'}}>
                        <Col lg='5'>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox"
                                    name="agree"
                                    checked={this.state.agree}
                                    onChange={this.handleInputChange} /> {' '}
                                <strong>May we contact you?</strong>
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: '2rem'}}>
                        <Col lg='5'>
                            <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                <option>By Email</option>
                                <option>By Phone</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row style={{marginBottom: '2rem'}}>
                        <Col lg='5'>
                            <Input type="textarea" id="feedback" name="feedback"  placeholder="Feedback"
                                rows="12"
                                value={this.state.feedback}
                                onChange={this.handleInputChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col lg='5'>
                            <Button type="submit" style={{ marginBottom: '1rem', background: 'orangered', color: 'black', fontWeight: 'bold' }}>
                                SUBMIT
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}


export default Contact;