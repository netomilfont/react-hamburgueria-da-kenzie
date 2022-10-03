import { Header } from "./styles";
import Container from "../Container";
import logo from "../../images/logoBurguer.png";

const HeaderMain = ({ value, onChange }) => {
  return (
    <Header>
      <Container>
        <img src={logo} alt="" />
        <div className="container__search">
          <input type="text" value={value} onChange={onChange} />
          <button type="submit">Pesquisar</button>
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMain;
