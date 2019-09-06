import { combineReducers } from 'redux';
import dishesReducer from './dishesReducer';
import ordersReducer from './ordersReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  orders: ordersReducer,
  cart: cartReducer
})

export default rootReducer;
