
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/Productlist';

function App() {
  return (
    <div >
       <Header/>
       
      

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products/add' element={<AddProduct/>}/>
          <Route path='/product/edit/:id' element={<EditProduct/>}/>
        </Routes>
       
      
    </div>
  );
}

export default App;
