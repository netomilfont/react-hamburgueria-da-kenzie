import { useState, useEffect } from "react";
import Container from "../Container";
import Header from "../Header";
import { List, Section } from "./styles";
import ProductCard from "../ProductCard";
import Cart from "../Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [search, setSearch] = useState("");

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

    if (!findItem) {
      setProductsCart([...productsCart, clickedItem]);
    } else {
      toast.error("Este item já está no carrinho.", {
        position: "top-center",
      });
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

  const productsFiltered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Container>
        <Section>
          <List>
            {productsFiltered.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                image={product.img}
                category={product.category}
                price={`${product.price.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                  minimumFractionDigits: 2,
                })}`}
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
      <ToastContainer />
    </>
  );
};

export default ProductList;
