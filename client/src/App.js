import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import Shop from './Components/Shop'
import Footer from './Components/Footer'
import Information from './Components/Information';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path='/shop' component={Shop} />
      <div className='container'>
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route path = '/information' component={Information} />


        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
