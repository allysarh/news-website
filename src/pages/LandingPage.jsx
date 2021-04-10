import React from 'react';
import CardComp from '../component/CardComp';
import CarouselComp from '../component/CarouselComp';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <CarouselComp />
                <div className="d-flex m-5">
                    <CardComp />
                    <CardComp />
                </div>
            </div>
        );
    }
}

export default LandingPage;