import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Button } from "../../components/Button/Button";
import { useParams } from "react-router";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container className="product">
      <Row>
        {product ? (
          <>
            <Col xl={6} className="product-img">
              <img src={product.image} alt={"product-img"} />
            </Col>
            <Col xl={6} className="product-details">
              <h3 className="product-category">{product.category}</h3>
              <span className="product-price">${product.price}</span>
              <p className="product-description">{product.description}</p>
              <span className="product-rating">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </span>

              <Button title={"Add To Cart"} className={"btn btn-light"} />
            </Col>
          </>
        ) : (
          <p>No product found</p>
        )}
      </Row>
    </Container>
  );
}

export default ProductDetail;