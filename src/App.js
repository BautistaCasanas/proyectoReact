//Componentes
import NavBar from './componentes/NavBar/NavBar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound from './componentes/NotFound/notFound';
import ItemDetailComponent from './componentes/ItemDetail/ItemDetailComponent';
import Cart from './componentes/Cart/Cart';

//views
import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';


const App = () => {

  return (
    <>
    <Router>
      <header>
        <NavBar/>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/detail/:itemID" element={<ItemDetailComponent/>}></Route>
        <Route path="*" element={<NotFound/>} /> 
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      </Router>
    </>
  );
}


export default App;
