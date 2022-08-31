import React, { Component } from 'react'
import {Link} from 'react-router-dom';
 import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (<div>
                        <div className='ishop'>iSHOP</div>

            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/' className="nav-link">
                Home
                </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/product" className="nav-link">
                       Products
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto" >
                      <i class="fa fa-user" aria-hidden="true" style={{marginRight:"50px",color:"white"}}> My Profile</i>
                  <ButtonContainer style={{border:"2px solid white"}}>
                      <i className="fas fa-cart-plus"><span style={{color:"white"}}>cart</span></i>

                  </ButtonContainer>
               </Link>
            </NavWrapper>
            </div>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
