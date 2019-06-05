export default function ordersReducer(state = { orders: [] }, action) {
  switch(action.type) {
    case 'CREATE_ORDER':
      return state.orders.concat(action.order);
    default:
      return state;
  }
}
