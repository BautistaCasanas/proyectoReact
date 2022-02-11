//Componentes
import NavBar from '../componentes/NavBar/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from '../componentes/NotFound/notFound';
import ItemDetailComponent from '../componentes/ItemDetail/ItemDetailComponent';
import Cart from '../componentes/Cart/Cart';


//views
import Home from '../views/Home';
import Products from '../views/Products';
import Contact from '../views/Contact';


const Router = () => {

  return (
    <>
   
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/detail/:itemID" element={<ItemDetailComponent/>}></Route>
        <Route path="*" element={<NotFound/>} /> 
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </>
  );
}


export default Router;
