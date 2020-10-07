import React from 'react';

function About(props) {
    return (
        <div className="container-fluid about">
            <div className="row" style={{padding: '2rem'}}>
                <div className="col">
                    <h2 style={{ paddingBottom: '1rem' }}>Our Story</h2>
                    <h4>
                        Established in 1994, our mission has always been to bring Halloween joy <br /> 
                        (and scares) all year. Please check out our creepy home decor store <br />
                        both online and in person, and visit us every year in October for bone-tingling <br />
                        events. We will update our homepage by the first of September <br />
                        each year to let you know our Annual Creeptacular schedule. Tickets <br />
                        for 2020 are $30 each night, all events included.
                    </h4>
                </div>
            </div>
            <div className="row" style={{padding: '2rem'}}>
                <div className="col">
                    <h2 style={{ paddingBottom: '1rem' }}>Location</h2>
                    <h4>
                        1313 Halloween Lane <br />
                        Saint Paul, MN <br />
                        55104
                    </h4>
                </div>
            </div>

            <div className="row" style={{padding: '2rem'}}>
                <div className="col">
                    <h2 style={{ paddingBottom: '1rem' }}>Hours</h2>
                    <h4>
                        Monday: 9am-6pm <br />
                        Tuesday: Closed <br />
                        Wednesday: 9am-6pm <br />
                        Thursday: 9am-6pm <br />
                        Friday: 10am-2pm <br />
                        Saturday: 10am-2pm <br />
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default About;