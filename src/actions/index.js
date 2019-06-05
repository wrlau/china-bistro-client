const API_URL = process.env.REACT_APP_API_URL;

function fetchDishes() {
  return fetch(`${API_URL}/dishes`)
  .then(response => response.json())
}

export const getDishes = () => {
  return (dispatch) => {
    return fetchDishes().then(
      dishes => dispatch({ type: 'RECEIVE_DISHES', dishes: dishes })
    )
  };
}
