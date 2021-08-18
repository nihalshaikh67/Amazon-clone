import './App.css';
import React , {useEffect} from 'react'
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {useDispatch} from 'react-redux'
import {auth} from './utils/firebase'
import { setUser } from './redux/actions';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';


function App() {


  let dispatch  =useDispatch();

useEffect(()=>{
auth.onAuthStateChanged((authUSer)=>{
  if(authUSer){
    dispatch(setUser(authUSer))
  }else{
    dispatch(setUser(null));
  }
});
},[dispatch])
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
            <Route path="/checkout">
                <Header/>
              <Checkout/>
            </Route>
            <Route path="/product/:id">
                <Header/>
              <SingleProduct/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
        <Route path="/login">
           <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
