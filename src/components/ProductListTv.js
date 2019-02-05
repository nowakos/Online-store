import React, {Component, Fragment} from 'react';
import Title from "./Title";
import {ProductConsumer} from "../context";
import Product from "./Product";
import {ButtonContainer} from "./Button";

class ProductListTv extends Component {


    render() {
        return (
            <ProductConsumer>
                {value => {

                    const product = value.products;
                    const sortedPrice = value.sortedPrice;
                    const sortedTitle = value.sortedTitle;

                    return (
                        <Fragment>
                            <div className="py-5">
                                <div className="container">
                                    <Title title='Smartphone'/>
                                    <ButtonContainer onClick={() => {
                                        value.sortByPrice()
                                    }}
                                    >sort by price</ButtonContainer>
                                    <ButtonContainer onClick={() => {
                                        value.sortByTitle()
                                    }}
                                    >sort by name</ButtonContainer>
                                    <div className="row">

                                        {sortedPrice? product.filter((elem) => {
                                            return elem.category === 'TV'
                                        }).sort((a, b) => a.price - b.price)
                                            .map(product => {
                                                return <Product key={product.id} product={product}
                                                />
                                            }): sortedTitle ?  product.filter((elem) => {
                                                return elem.category === 'TV'
                                            }).sort((a, b) => {
                                            let nameA = a.title.toUpperCase();
                                            let nameB = b.title.toUpperCase();
                                            if (nameA < nameB) {
                                                return -1;
                                            }
                                            if (nameA > nameB) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                                .map(product => {
                                                    return <Product key={product.id} product={product}
                                                    />
                                                }) : product.filter((elem) => {
                                                return elem.category === 'TV'
                                            }).map(product => {
                                                return <Product key={product.id} product={product}
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )


                }}
            </ProductConsumer>


        );
    }

}

export default ProductListTv;

