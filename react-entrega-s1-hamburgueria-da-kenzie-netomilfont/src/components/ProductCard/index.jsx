import { Card, ButtonAdd } from "./styles";

const ProductCard = ({ id, name, image, category, price, onClick }) => {
  return (
    <Card>
      <div className="img__product">
        <img src={image} alt={name} />
      </div>
      <div className="info__product">
        <h3>{name}</h3>
        <span>{category}</span>
        <p>{price}</p>
        <ButtonAdd onClick={onClick} id={id}>
          {" "}
          Adicionar
        </ButtonAdd>
      </div>
    </Card>
  );
};

export default ProductCard;
