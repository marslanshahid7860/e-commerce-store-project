import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../Api";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Button } from "../components/Button/Button";
import "./../App.css";

function Shop() {
  const [myData, setMyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setMyData(data);
        setFilteredData(data); // Initialize filtered data with all products
      } catch (error) {
        setError("Error fetching data from API");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const handleCategorySelect = (category) => {
    if (category === null) {
      // If "All" category is selected, show all products
      setFilteredData(myData);
      setSelectedCategory(null);
    } else {
      // Filter the products based on the selected category
      const filteredProducts = myData.filter(
        (product) => product.category === category
      );
      setFilteredData(filteredProducts);
      setSelectedCategory(category);
    }
  };

  return (
    <Container className="product-shop">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <h3 className="product-title">New Products Deals</h3>
        </Col>
      </Row>
      <Row className="category-buttons">
        <Col md={6} className="d-flex justify-content-between pb-3 pt-3">
          <Button
            className={!selectedCategory ? "active" : "btn-custom"}
            onClick={() => handleCategorySelect(null)}
            title={"All"}
          />
          <Button
            className={
              selectedCategory === "electronics" ? "active" : "btn-custom"
            }
            onClick={() => handleCategorySelect("electronics")}
            title={"Electronics"}
          />
          <Button
            className={
              selectedCategory === "men's clothing" ? "active" : "btn-custom"
            }
            onClick={() => handleCategorySelect("men's clothing")}
            title={"Men"}
          />
          <Button
            className={
              selectedCategory === "women's clothing" ? "active" : "btn-custom"
            }
            onClick={() => handleCategorySelect("women's clothing")}
            title={"Women"}
          />
          <Button
            className={
              selectedCategory === "jewelery" ? "active" : "btn-custom"
            }
            onClick={() => handleCategorySelect("jewelery")}
            title={"Jewelry"}
          />
        </Col>
      </Row>

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
}

export default Shop;
