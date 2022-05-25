import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer/item-detail-container';
import ItemListConatiner from './pages/ItemListContainer/item-list-container';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/cart';
import Checkout from './pages/Checkout/checkout';


function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListConatiner/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:categoryId' element={<ItemListConatiner/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </div>
  );
}

export default App;
