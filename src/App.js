import React from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
 import Modal from './components/Modal';
import Footer from './components/footer';
 import Home from './components/home';

function App() {
  return (
    <React.Fragment>
       <Navbar />
      <Switch>
         <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
       </Switch>
      <Modal />
      <Footer/>
     </React.Fragment>

  );
}

export default App;
