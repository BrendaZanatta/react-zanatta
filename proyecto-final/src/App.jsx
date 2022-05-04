import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './pages/ItemDetailContainer/item-detail-container';
import ItemListConatiner from './pages/ItemListContainer/item-list-container';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListConatiner/>}/>
      <Route path='/category/:categoryId' element={<ItemListConatiner/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
