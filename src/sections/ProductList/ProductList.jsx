import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList = () => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(null);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setMyData(res.data);
    } catch (error) {
      setError("Error fetching data from API");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  // Filter the data to get the first four and last four items
  const filteredData = [...myData.slice(0, 4), ...myData.slice(-4)];

  return (
    <Container>
      <Row className="product-item">
        {filteredData.map((product) => (
          <Col xl={3} lg={4} md={6} sm={6} xs={12} key={product.id}>
            <div className="card-item">
              <ProductCard product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
