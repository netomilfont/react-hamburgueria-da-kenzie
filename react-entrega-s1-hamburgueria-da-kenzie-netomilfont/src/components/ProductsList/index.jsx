import { useState, useEffect } from "react";
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
      });
  }, []);

  function addCart(event) {
    const id = event.target.id;

    const clickedItem = products.find((element) => element.name === id);

    const findItem = productsCart.some(
      (product) => product.name === clickedItem.name
    );
    console.log(productsCart);
    if (!findItem) {
      setProductsCart([...productsCart, clickedItem]);
    } else {
      alert("Este item já está no carrinho.");
    }
  }

  function removeProduct(event) {
    const id = event.target.id;

    const newProductsList = productsCart.filter(
      (product) => product.name !== id
    );

    setProductsCart(newProductsList);
  }

  function removeAll() {
    setProductsCart([]);
  }

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
                onClick={(event) => addCart(event)}
                id={product.name}
              />
            ))}
          </List>
          <Cart
            productsAdd={productsCart}
            removeProduct={removeProduct}
            removeAll={removeAll}
          />
        </Section>
      </Container>
    </>
  );
};

export default ProductList;
