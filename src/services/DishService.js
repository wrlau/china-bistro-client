const API_URL = process.env.REACT_APP_API_URL;

const DishService = {
  fetchDishes() {
    return fetch(`${API_URL}/dishes`)
    .then(response => response.json())
  },

  createOrder(cart) {
    return fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({order: cart})
    })
    .then(response => response.json());
  }
}

export default DishService;
