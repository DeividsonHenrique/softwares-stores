import { useState } from 'react';
import Header from '../../Components/Header';


const products = [
  { id: 1, name: 'Produto 1', price: 10 },
  { id: 2, name: 'Produto 2', price: 20 },
  { id: 3, name: 'Produto 3', price: 30 },
];

const Carrinho = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('ProductList');

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: quantity }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'ProductList':
        return <ProductList products={products} addToCart={addToCart} setCurrentPage={setCurrentPage} />;
      case 'Cart':
        return <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} setCurrentPage={setCurrentPage} />;
      case 'Checkout':
        return <Checkout cart={cart} setCurrentPage={setCurrentPage} />;
      default:
        return <ProductList products={products} addToCart={addToCart} setCurrentPage={setCurrentPage} />;
    }
  };


  return (
    <>
    <Header />
    <div>
      {renderPage()}
    </div>
    </>
  );
};

   

const ProductList = ({ products, addToCart, setCurrentPage }) => (
  <div>
    <h1>Lista de Produtos</h1>
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - R$ {product.price}
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </li>
      ))}
    </ul>
    <button onClick={() => setCurrentPage('Cart')}>Ver Carrinho</button>
  </div>
);

const Cart = ({ cart, updateQuantity, removeFromCart, setCurrentPage }) => (
  <div>
    <h1>Carrinho de Compras</h1>
    <ul>
      {cart.map(item => (
        <li key={item.id}>
          {item.name} - R$ {item.price} x 
          <input 
            type="number" 
            value={item.quantity} 
            min="1" 
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </li>
      ))}
    </ul>
    <button onClick={() => setCurrentPage('ProductList')}>Voltar para Lista de Produtos</button>
    <button onClick={() => setCurrentPage('Checkout')}>Finalizar Compra</button>
  </div>
);

const Checkout = ({ cart, setCurrentPage }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Finalizar Compra</h1>
      <p>Total: R$ {total}</p>
      <button onClick={() => alert('Compra finalizada com sucesso!')}>Confirmar Compra</button>
      <button onClick={() => setCurrentPage('Cart')}>Voltar para o Carrinho</button>
    </div>
  );
};

export default Carrinho;

