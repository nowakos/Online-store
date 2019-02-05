import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from "./Button"

class Navbar extends Component {


    render() {
        
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' className="nav-link">
                    Media&Media
                </Link>
                <ul className="navbar-nav align-items-center" onClick={this.toggleOpen}>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select category
                        </a>
                        <div className='dropdown-menu' aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/productsMobile' className="nav-link">
                                Smartphone
                            </Link>
                            <Link to='/productsTV' className="nav-link">
                                TV
                            </Link>
                        </div>

                    </li>
                </ul>
                <Link to='/' className="nav-link">
                    Outlet
                </Link>
                <Link to='/' className="nav-link">
                    Promotions
                </Link>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span>
                        <i className="fas fa-shopping-cart"/>
                        </span>
                    </ButtonContainer>
                </Link>

            </NavWrapper>


        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainColor);
    padding: 0 0 0 0;
    .dropdown-menu {
    background: var(--mainColor);
    border: none;
    margin: 0;
    border-radius: 0;
    border-bottom-left-radius: 0.25rem
    border-bottom-right-radius: 0.25rem
    }
    .nav-link {
    color: var(--secendColor) !important;
    font-size: 1.3rem;
    
    }
`

export default Navbar;