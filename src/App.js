import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DishListContainer from './containers/DishListContainer';
import OrderContainer from './containers/OrderContainer';
import OrderForm from './containers/OrderForm';
//import DishService from './services/DishService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createOrder } from './actions'
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      cart: [],
      showOrderConfirm: false,
      orderTotal: 0
    }
  }

  componentDidMount() {
    this.loadStateWithLocalStorage();

    // DishService.fetchDishes().then(dishes => this.setState({ dishes }))

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
    this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  saveStateToLocalStorage() {
    this.setState({ showOrderConfirm: false })

    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  loadStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string into a JS object and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  addItem = (dish) => {
    this.setState({
        cart: this.state.cart.concat(dish),
        orderTotal: this.state.orderTotal + dish.price
      });
      alert("Dish Added!")
  }

  removeCartItem = (id) => {
    const cart = [...this.state.cart];
    const deletedItem = cart.find(cartItem => cartItem.id === id);
    const updatedCart = cart.filter(cartItem => cartItem.id !== id);

    this.setState({
      cart: updatedCart,
      orderTotal: this.state.orderTotal - deletedItem.price
     })
  }

  checkout = (cart) => {
    // DishService.createOrder(cart).then(order => this.setState({ cart: [] }))
    console.log('A');
    this.props.createOrder(cart);  
    console.log('B');
    alert("Order Submitted!");

    this.setState({
      cart: [],
      showOrderConfirm: true,
      orderTotal: 0
    });
  }

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" render={() => <DishListContainer addItem={this.addItem.bind(this)}/> } />
            <Route exact path="/order" component={OrderContainer} />
            <Route exact path="/cart" render={() => <OrderForm cart={this.state.cart} removeCartItem={this.removeCartItem.bind(this)} checkout={this.checkout.bind(this)} showOrderConfirm={this.state.showOrderConfirm} orderTotal={this.state.orderTotal}/> }  />
          </div>
        </>
      </Router>
    );
  }
}

export default connect(null, { createOrder })(App);
