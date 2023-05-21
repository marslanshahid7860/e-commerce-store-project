import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { ProductCard } from "../../components/ProductCard/ProductCard";

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

  return (
    // <div>
    //   {myData.map((product) => {
    //     const { id, title, price } = product;
    //     return (
    //       <React.Fragment key={id}>
    //         <h2>{title}</h2>
    //         <p>{price}</p>
    //       </React.Fragment>
    //     );
    //   })}
    // </div>
    <Container fluid>
      <Row className="product-title">
        {myData.map((product) => (
          
          <Col xl={3} lg={4} md={6} sm={6} xs={12}>
            <div className="card-item">
              <ProductCard product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
