import { useState, useEffect } from "react";
// import api from "../../services/api";
import Container from "../Container";
import Header from "../Header";
import { List, Section } from "./styles";
import ProductCard from "../ProductCard";
import Cart from "../Cart";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
    // api.get("/products").then((response) => console.log(response));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Section>
          <List>
            {products.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                image={product.img}
                category={product.category}
                price={` R$ ${product.price},00`}
              />
            ))}
          </List>
          <Cart productsAdd={productsCart} />
        </Section>
      </Container>
    </>
  );
};

export default ProductList;
