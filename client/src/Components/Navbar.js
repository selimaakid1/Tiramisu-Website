import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-sm navbar-hero">

            <Link to='/' class='navbar-brand'><img src='/Dolce3.png' width='50px'/></Link>
            <button class="navbar-toggler hamburger hamburger--collapse" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">

                    <li class="nav-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/cart'><i class="fas fa-shopping-cart fa-fw"></i></Link>
                    </li>
                    

                </ul>
            </div>
        </nav>
    )}
export default Navbar