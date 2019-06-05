export default function dishesReducer(state = { dishes: [] }, action) {
  switch(action.type) {
    case 'RECEIVE_DISHES':
      return action.dishes;
    default:
      return state;
  }
}
