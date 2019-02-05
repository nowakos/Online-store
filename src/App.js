import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import ProductListMobile from './components/ProductListMobile'
import ProductListTv from './components/ProductListTv'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import Modal from "./components/Modal"
import MainPage from "./components/MainPage"

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/productsMobile' component={ProductListMobile} />
                    <Route exact path='/productsTV' component={ProductListTv} />
                    <Route path='/details' component={Details} />
                    <Route path='/cart' component={Cart} />
                    <Route component={Default} />
                </Switch>
                <Modal />
            </Fragment>

        );
    }
}

export default App;
