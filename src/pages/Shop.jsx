import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts } from "../Api";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
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
        <Col md={4} className="d-flex justify-content-between pb-3 pt-3">
          <Link
            to="/shop"
            className={!selectedCategory ? "active" : ""}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </Link>
          <Link
            to="/shop"
            className={selectedCategory === "electronics" ? "active" : ""}
            onClick={() => handleCategorySelect("electronics")}
          >
            Electronics
          </Link>
          <Link
            to="/shop"
            className={selectedCategory === "men's clothing" ? "active" : ""}
            onClick={() => handleCategorySelect("men's clothing")}
          >
            Men
          </Link>
          <Link
            to="/shop"
            className={selectedCategory === "women's clothing" ? "active" : ""}
            onClick={() => handleCategorySelect("women's clothing")}
          >
            Women
          </Link>
          <Link
            to="/shop"
            className={selectedCategory === "jewelery" ? "active" : ""}
            onClick={() => handleCategorySelect("jewelery")}
          >
            Jewelry
          </Link>
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
