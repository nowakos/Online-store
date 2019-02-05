import React, {Component} from 'react';
import Title from "./Title";
import {ProductConsumer} from "../context";
import Product from "./Product";

class BestSeler extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name='TOP4' title='Bestseller'/>
                        <div className="row">
                            <ProductConsumer>

                                {value => {
                                    return value.products.filter((elem) => {
                                        return elem.id === 1 || elem.id === 3 || elem.id === 15 || elem.id === 10
                                    }).map(product => {
                                        return <React.Fragment>
                                            <Product key={product.id} product={product}/>
                                        </React.Fragment>
                                    })

                                }}
                            </ProductConsumer>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BestSeler;