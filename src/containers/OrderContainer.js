import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderContainer extends Component {

  state = {
    orderTotal: 0,
    showOrderConfirm: false
  }

    render() {
      return (
        <div>
          ORDER CONTAINER: CART CONTENTS
          {this.props.cart}
        </div>
      )
    }
}

const mapStateToProps = state => {
  return({
    cart: state.cart
   })
}

export default connect(mapStateToProps)(OrderContainer);
