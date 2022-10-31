import './App.css';
import NavBar from './components/Header/NavBar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route 
                path="/category/:categoryName" 
                element={<ItemListContainer />}
              />
              <Route path="/detail/idProd" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
