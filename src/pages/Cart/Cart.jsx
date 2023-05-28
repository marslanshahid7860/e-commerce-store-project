import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Button} from "../../components/Button/Button"
import "./Cart.css";

function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Update the quantity in the localStorage whenever it changes
    const updatedCartItems = cartItems.map((cartItem) => ({
      ...cartItem,
      quantity: quantities[cartItem.product.id] || 1,
    }));
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  }, [quantities, cartItems]);

  const handleIncrement = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setQuantities((prevQuantities) => {
      const prevQuantity = prevQuantities[itemId] || 1;
      if (prevQuantity > 1) {
        return {
          ...prevQuantities,
          [itemId]: prevQuantity - 1,
        };
      }
      return prevQuantities;
    });
  };

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product.id !== itemId
    );
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[itemId];
    setQuantities(updatedQuantities);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = (item) => {
    const itemQuantity = quantities[item.product.id] || 1;
    return item.product.price * itemQuantity;
  };

  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + getTotalPrice(cartItem),
    0
  );

  if (!cartItems.length) {
  var cart = "Cart is empty";
}

  return (
    <React.Fragment>
      <Container className="cart">
        <div className="shopping-cart">
          <div>
            <h2 className="cart-heading">Shopping Cart</h2>
          </div>
          <div className="cart-header">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </div>
        </div>
        <div className="empty">{cart}</div>
        <Row>
          <div className="single-product heading">
            <div>
              <h4>Product Details</h4>
            </div>
            <div>
              <h4>Product Category</h4>
            </div>
            <div>
              <h4>Quantity</h4>
            </div>
            <div>
              <h4>Price</h4>
            </div>
            <div>
              <h4>Total</h4>
            </div>
            <div>
              <h4>Actions</h4>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <div key={cartItem.product.id} className="single-product">
              <div className="product-image">
                <img src={cartItem.product.image} alt="product" />
              </div>
              <div className="Title">
                <span className="cart-item-title">
                  {cartItem.product.category}
                </span>
              </div>
              <div className="quantity">
                <div className="cart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrement(cartItem.product.id)}
                  >
                    -
                  </button>
                  <span className="quantity-value">
                    {quantities[cartItem.product.id] || 1}
                  </span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrement(cartItem.product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="price">${cartItem.product.price}</div>
              <div className="total">${getTotalPrice(cartItem)}</div>
              <div className="actions">
                <Button
                  title="Remove"
                  onClick={() => handleRemove(cartItem.product.id)}
                  className="btn-danger"
                />
              </div>
            </div>
          ))}
        </Row>
        <div className="cart-actions">
          <Link to="/shop">Continue Shopping</Link>
          <div>
            {cartItems.length > 0 && (
              <div className="cart-grand-total">
                Grand Total: ${totalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Cart;
