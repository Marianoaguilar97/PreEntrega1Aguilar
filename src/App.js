import './App.css';
import NavBar from './components/Header/NavBar';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import ItemListContainer from './components/Main/ItemListContainer';
import Cart from './components/Cart/Cart';
import Form  from './components/Form/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';

const App = () => {
  return (
      <BrowserRouter>
      <CartProvider>
          <NavBar />
          <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route 
                path="/category/:categoryName" 
                element={<ItemListContainer />}
              />
              <Route path="/detail/:idProd" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Form />} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
  );
};

export default App;
