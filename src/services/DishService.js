const API_URL = process.env.REACT_APP_API_URL;

const DishService = {
  fetchDishes() {
    return fetch(`${API_URL}/dishes`)
    .then(response => response.json())
  }
}

export default DishService;
