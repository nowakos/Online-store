import React, {Component} from 'react';
import Carousel from "./Carousel"
import BestSeler from "./BestSeler";
import Newsletter from'./Newsletter'

class MainPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Carousel/>
                <BestSeler/>
                <Newsletter/>
            </React.Fragment>
        );
    }
}

export default MainPage;
