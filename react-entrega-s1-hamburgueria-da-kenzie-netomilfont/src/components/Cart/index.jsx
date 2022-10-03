import { Cart, ListCart, ProductCart } from "./styles";

const CartMain = ({ productsAdd }) => {
  return (
    <>
      <Cart>
        <div className="title__cart">
          <h3>Carrinho de compras</h3>
        </div>
        <div className="cart">
          <h4>Sua sacola está vazia</h4>
          <span>Adicione itens</span>
          <ListCart>
            {productsAdd.map((product) => (
              <ProductCart>
                <div>
                  <img src={product.img} alt="" />
                </div>
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.category}</span>
                </div>
                <div>
                  <button>Remover</button>
                </div>
              </ProductCart>
            ))}
          </ListCart>
        </div>
      </Cart>
    </>
  );
};

export default CartMain;
