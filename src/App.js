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

  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" render={() => <Dishes dishes={this.state.dishes} handleClick={this.handleClick.bind(this)} /> } />
            <Route exact path="/order/new" render={() => <OrderForm cart={this.state.cart} /> }  />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
