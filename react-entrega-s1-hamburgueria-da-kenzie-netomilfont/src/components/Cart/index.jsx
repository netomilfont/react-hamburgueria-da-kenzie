import { Cart, ListCart, ProductCart, TotalList } from "./styles";

const CartMain = ({ productsAdd, removeProduct, removeAll }) => {
  console.log(productsAdd);
  let priceTotal = productsAdd.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <>
      <Cart>
        <div className="title__cart">
          <h3>Carrinho de compras</h3>
        </div>
        <div className="cart">
          {productsAdd.length === 0 ? (
            <>
              <h4>Sua sacola está vazia</h4>
              <span>Adicione itens</span>
            </>
          ) : (
            <>
              <ListCart>
                {productsAdd.map((product, index) => (
                  <ProductCart key={index} id={product.name}>
                    <div className="container__img">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="container__infoProductCart">
                      <div className="info__product">
                        <h3>{product.name}</h3>
                        <span>{product.category}</span>
                      </div>
                      <div>
                        <button id={product.name} onClick={removeProduct}>
                          Remover
                        </button>
                      </div>
                    </div>
                  </ProductCart>
                ))}
              </ListCart>
              <TotalList>
                <div className="total__products">
                  <h4>Total</h4>
                  <span>{`R$ ${priceTotal},00`}</span>
                </div>
                <button onClick={removeAll}>Remover todos</button>
              </TotalList>
            </>
          )}
        </div>
      </Cart>
    </>
  );
};

export default CartMain;
