import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "../../components/Button/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (response.status !== 200) {
          throw new Error("Error fetching product");
        }
        const data = response.data;
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching product");
        setLoading(false);
      }
    };

    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const newItem = {
      product,
      quantity: 1,
    };
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === newItem.product.id
    );

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log("Cart items:", cartItems);
    alert("Product added to cart successfully!");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container className="product">
      <Row>
        <Col xl={6} className="product-img">
          <img src={product.image} alt={"product-img"} />
        </Col>
        <Col xl={6} className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <h3 className="product-category">{product.category}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-price">
            <span className="price">Retail price</span>
            <br />
            <span className="value">${product.price}</span>
          </div>
          <span className="product-rating">
            Rating:{" "}
            {product.rating
              ? `${product.rating.rate} (${product.rating.count} reviews)`
              : "N/A"}
          </span>
          <div className="button-container">
            {product && (
              <>
                <Button
                  title={"Add To Cart"}
                  className="btn"
                  onClick={handleAddToCart}
                />
                <Link to="/cart">
                  <Button
                    title="Go To Cart"
                    className="btn-primary"
                  />
                </Link>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
