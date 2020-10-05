import React, { Component } from 'react';
import { Card, Button, CardImg, CardHeader, CardFooter, CardBody } from 'reactstrap';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decorations: [
                {
                    id: 0,
                    name: 'Poison Decanter',
                    image: 'assets/images/poison-decanter.jpg',
                    description: 'Glass decanter comes with blood-red food coloring.'
                },
                {
                  id: 1,
                  name: "Smoking Jack-O'-Lantern",
                  image: 'assets/images/smoking-jack-o-lantern.jpg',
                  description: "Realistic jack-o'-lantern emits ethereal fog, batteries included."
                },
                {
                    id: 2,
                    name: 'Life-Size Skeleton',
                    image: 'assets/images/life-size-skeleton.jpg',
                    description: 'Life-size poseable skeleton.'
                },
                {
                    id: 3,
                    name: 'Pumpkin Lantern Set',
                    image: 'assets/images/pumpkin-lantern-set.jpg',
                    description: 'Four pumpkin lanterns with bat, cat, and ghost lanterns included.'
                },
                {
                    id: 4,
                    name: 'Haunted Library Set',
                    image: 'assets/images/haunted-library-set.jpg',
                    description: 'Skull, faux "The Works of Poe" book, and Bat-Wing Potion bottle.'
                },
                {
                    id: 5,
                    name: 'Pumpkin Mug Set',
                    image: 'assets/images/pumpkin-mug-set.jpg',
                    description: "Hand-made pumpkin mugs, set of four."
                },
                {
                    id: 6,
                    name: 'Room 13 Print',
                    image: 'assets/images/door-13-print.jpg',
                    description: "24' by 18' print."
                },
                {
                    id: 7,
                    name: 'Orange and Purple String Lights',
                    image: 'assets/images/orange-and-purple-lights.jpg',
                    description: 'Indoor/outdoor string lights.'
                },
                {
                    id: 8,
                    name: 'Halloween Cookie Cutter Set',
                    image: 'assets/images/halloween-cookie-cutter.jpg',
                    description: 'Halloween cookie cutter set includes cat, ghost, skeleton, and witch.'
                },
                {
                    id: 9,
                    name: 'Neon "Booyah" Sign',
                    image: 'assets/images/neon-booyah-sign.jpg',
                    description: 'Neon ceiling light, includes hanging kit.'
                }
            ],
        };
    }

    render() {
        const shopList = this.state.decorations.map(decoration => {
            return (
                <div key={decoration.id} className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Card>
                                <CardHeader>{decoration.name}</CardHeader>
                                <CardBody>
                                    <CardImg width='100%' src={decoration.image} alt={decoration.description} />
                                </CardBody>
                                <CardFooter>{decoration.description}</CardFooter>
                                <Button color='secondary'>Add To Cart</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className='container'>
                    {shopList}
            </div>
        );
    }
}

export default Shop;