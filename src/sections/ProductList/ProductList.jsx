import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../Api";
import "./ProductList.css";

export const ProductList = () => {
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setMyData(data);
      } catch (error) {
        setError("Error fetching data from API");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  // Filter the data to get the first four and last four items
  const filteredData = [...myData.slice(0, 4), ...myData.slice(-4)];

  return (
    <Container className="product-list">
      <h3>New Products Deals</h3>
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
