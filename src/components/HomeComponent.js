import React, { Component }  from 'react';
import { Card, CardImg, CardHeader, CardFooter, CardBody } from 'reactstrap';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: 0,
                    name: 'Pumpkin Patch',
                    image: 'assets/images/pumpkin-patch.jpg',
                    description: 'Every Saturday and Sunday through November 8th from 10am-5pm.'
                },
                {
                  id: 1,
                  name: "Creepy Corn Maze",
                  image: 'assets/images/corn-maze.jpg',
                  description: "Every Friday and Saturday through November 7th from 6pm-12am."
                },
                {
                    id: 2,
                    name: 'Haunted House',
                    image: 'assets/images/haunted-house.jpg',
                    description: 'Every Friday and Saturday through November 7th from 6pm-12am.'
                },
                {
                    id: 3,
                    name: 'Thirsty Skeleton Pub',
                    image: 'assets/images/haunted-pub.jpg',
                    description: 'The Thirsty Skeleton is open every Friday and Saturday through November 7th from 6pm-12am.'
                },
            ],
        };

    }

    render() {
        const eventList = this.state.events.map(event => {
            return (
                <div key={event.id} className='col-md-4 m-3'>
                    <div className='row'>
                        <Card className='eventListCard' style={{background: 'black'}}>
                            <CardHeader style={{background: 'black'}}>{event.name}</CardHeader>
                            <CardBody>
                                <CardImg width='100%' src={event.image} alt={event.description} />
                            </CardBody>
                            <CardFooter>{event.description}</CardFooter>
                        </Card>
                    </div>
                </div>
            );
        });

        return (
            <div className='container-fluid'>
                <div className='row'>
                    {eventList}
                </div>
            </div>
        );
    }
}

export default Home;

