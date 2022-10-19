import './App.css';
import NavBar from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting= "Hola, espero que tengas un buen dia!" />
    </>
  );
}

export default App;
