import './App.css';
import Header from './containers/Header';
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProductListing from './containers/ProductList';
import ProductDetails from './containers/ProductDetail';

function App() {
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" Component={ProductListing}/>
    <Route path="/product/:productId" Component={ProductDetails}/>
    <Route> 404 Route not found!!</Route>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App;
