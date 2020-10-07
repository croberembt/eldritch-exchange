import React, { Component }  from 'react';

class Jumbo extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className='header container-fluid banner' style={{color: 'orangered', paddingLeft: '3rem', paddingBottom: '2rem', background: 'transparent'}}>
                <div row>
                    <h1>Eldritch Exchange</h1>
                </div>
                <div row>
                    <h2>Where It's Always Halloween</h2>
                </div>
            </div>
        );
    }
}

export default Jumbo;