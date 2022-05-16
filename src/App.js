import React from 'react'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { toast } from 'react-toastify';
import { Switch, Route } from "react-router-dom";
import Checkout from './Components/Checkout';
import Mens from "./Components/shop/Mens";
import Lady from './Components/shop/Lady';
import Kids from './Components/shop/Kids';
import Signup from "./Components/Signup";
import Contact from "./Components/Contact"
import Product from "./Components/shop/Product"
import Cart from './Components/Cart';
import Buy from './Components/Buy';
const App = () => {

  // setTimeout(() => {
  //   toast('Welcome to page!', {
  //     position: "bottom-left",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // } )

  return (
    <>

      <Navbar />
      <br />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/men' component={Mens} />
        <Route exact path='/lady' component={Lady} />
        <Route exact path='/kid' component={Kids} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/buy' component={Buy} />
      </Switch>
    </>
  )
}
export default App;