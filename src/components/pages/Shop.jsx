import React, { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { getProducts } from "../Api";
import { ProductCard } from "../components/ProductCard/ProductCard";

function Shop() {
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
  // const filteredData = [...myData.slice(0, 4), ...myData.slice(-4)];

  return (
    <Container>
      <h3>New Products Deals</h3>
      <Row className="product-item">
        {myData.map((product) => (
          <Col xl={3} lg={4} md={6} sm={6} xs={12} key={product.id}>
            <div className="card-item">
              <ProductCard product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;