import { useState, createContext} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        setCart([...cart, {...item, cantidad}])
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const deleteAll = () => {
        setCart([]);
    };

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    return <CartContext.Provider value={{cart, addToCart, deleteAll, deleteOne}}> 
                { props.children } 
            </CartContext.Provider>
}

export default CartProvider