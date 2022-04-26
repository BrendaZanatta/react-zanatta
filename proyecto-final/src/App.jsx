import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConatiner from './components/ItemListContainer/item-list-container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConatiner greeting='Tienda Online de Ocean Cakes' />
    </div>
  );
}

export default App;
