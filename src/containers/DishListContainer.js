import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dish from '../components/Dish';

class DishListContainer extends Component {

  render() {
    const { dishes, handleClick } = this.props;

    return(
      <div>
        <h1>MENU</h1>
        {dishes.map(dish =>
          <>
            <Dish key={dish.id} name={dish.name} price={dish.price} />
            <button type="submit" onClick={() => handleClick(dish)}>Add to Cart</button>
          </>
        )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return({
    dishes: state.dishes
   })
};

export default connect(mapStateToProps)(DishListContainer);
