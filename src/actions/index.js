const API_URL = process.env.REACT_APP_API_URL;

function fetchDishes() {
  return fetch(`${API_URL}/dishes`)
  .then(response => response.json())
}

function sendCartData(cart) {
  return fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({order: cart})
    })
    .then(response => response.json());
  }


export const getDishes = () => {
  return (dispatch) => {
    return fetchDishes().then(
      dishes => dispatch({ type: 'RECEIVE_DISHES', dishes: dishes })
    )
  };
}

export const createOrder = (cart) => {
  return (dispatch) => {
    return sendCartData(cart).then(
      order => dispatch({ type: 'CREATE_ORDER', order: order })
    )
  };
}
