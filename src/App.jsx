import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludo = "Esta es la bienvenida a la pagina";

  return (
    <div>
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
