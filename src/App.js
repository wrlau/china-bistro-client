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
      dishes: []
    }
  }

  componentDidMount() {
    DishService.fetchDishes().then(dishes => this.setState({ dishes }))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Header />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" render={() => <Dishes dishes={this.state.dishes} /> } />
            <Route exact path="/order/new" component={OrderForm} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
