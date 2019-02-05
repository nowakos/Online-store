import React, {Component} from 'react';

class Carousel extends Component {


    render() {
        return (
            <React.Fragment>
                <div >
                    <div className="container">
                        <div className="row mx-auto justify-content-center" style={{maxWidth: '65rem'}}>
                            <div className="col-sm-10">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active" >
                                            <img src="../img/banner1.jpg" className="d-block w-100 " alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../img/banner2.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="../img/banner3.jpg" className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Carousel;