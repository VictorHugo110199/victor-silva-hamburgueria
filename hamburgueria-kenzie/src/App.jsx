import './App.css';
import { useState, useEffect } from 'react';
import Apps from './components/Apps';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])


  useEffect (() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((err) => console.log(err))
  },[])

 
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Apps 
          products={products} 
          setProducts={setProducts}
          setCurrentSale={setCurrentSale} 
          currentSale={currentSale}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        ></Apps>
      </header>
    </div>
  );
}

export default App;
