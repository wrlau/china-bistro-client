import React, { Component } from 'react';
import OrderForm from './containers/OrderForm';
import Dishes from './components/Dishes';
import DishService from './services/DishService';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      dishes: []
    }
  }

  componentDidMount() {
    DishService.fetchDishes().then(dishes => this.setState({ dishes }))
  }

  render() {
    return (
      <div className="App">
        <h1>China Bistro</h1>
        <div className="nav-bar">
          <p>nav bar</p>
        </div>
        <div className="order-form">
          <OrderForm />
        </div>
        <div className="side-bar">
          <Dishes dishes={this.state.dishes}/>
        </div>
      </div>
    );
  }
}

export default App;
