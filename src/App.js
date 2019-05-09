import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OrderForm from './containers/OrderForm';
import Dishes from './components/Dishes';
import DishService from './services/DishService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      dishes: [],
      cart: []
    }
  }

  componentDidMount() {
    DishService.fetchDishes().then(dishes => this.setState({ dishes }))
  }

  handleClick = (dish) => {
    console.log(dish);
    console.log(this.state);
    this.setState({
        cart: this.state.cart.concat(dish)
      });
  }

  removeCartItem = (id) => {
    const cart = [...this.state.cart];
    const updatedCart = cart.filter(cartItem => cartItem.id !== id);
    this.setState({ cart: updatedCart })
  }

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" render={() => <Dishes dishes={this.state.dishes} handleClick={this.handleClick.bind(this)} /> } />
            <Route exact path="/order/new" render={() => <OrderForm cart={this.state.cart} removeCartItem={this.removeCartItem.bind(this)} /> }  />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
