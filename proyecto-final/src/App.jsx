import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/item-detail-container';
import ItemListConatiner from './components/ItemListContainer/item-list-container';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListConatiner greeting='Tienda Online de Ocean Cakes' /> */}
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
