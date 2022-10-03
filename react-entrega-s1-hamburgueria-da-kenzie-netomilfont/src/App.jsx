import Global from "./styles/global";
import "./App.css";
import ProductList from "./components/ProductsList";

function App() {
  return (
    <>
      <div className="App">
        <Global />
        <ProductList />
      </div>
    </>
  );
}

export default App;
