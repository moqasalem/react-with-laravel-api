import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList';
import SearchProduct from './SearchProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<SearchProduct/>} />

            <Route path="/add" element={<Protected Cmp={AddProduct} />} />

            <Route path="/update/:id" element={<Protected Cmp={UpdateProduct} />} />

            <Route path="/" element={<ProductList />} />

          </Routes>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
