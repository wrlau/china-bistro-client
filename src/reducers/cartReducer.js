export default function cartReducer(state = { cart: [] }, action) {
  switch(action.type) {
    case 'ADD_ITEM':
    debugger
     console.log(action);
      return state.cart.concat(action.dish)
    default:
      return state;
  }
}
