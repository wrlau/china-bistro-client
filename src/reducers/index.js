import { combineReducers } from 'redux';
import dishesReducer from './dishesReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  dishes: dishesReducer,
  orders: ordersReducer
})

export default rootReducer;
