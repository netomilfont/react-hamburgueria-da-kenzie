import { Card, ButtonAdd } from "./styles";

const ProductCard = ({ name, image, category, price, onClick }) => {
  return (
    <Card>
      <div className="img__product">
        <img src={image} alt={name} />
      </div>
      <div className="info__product">
        <h3>{name}</h3>
        <span>{category}</span>
        <p>{price}</p>
        <ButtonAdd onClick={onClick}> Adicionar</ButtonAdd>
      </div>
    </Card>
  );
};

export default ProductCard;
