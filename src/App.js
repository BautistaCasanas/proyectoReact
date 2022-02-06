//Componentes
import NavBar from './componentes/NavBar/NavBar';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//views
import Home from './views/Home';
import Products from './views/Products';
import Contact from './views/Contact';
import ItemDetailComponent from './componentes/ItemDetail/ItemDetailComponent';

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
      </Routes>
      </Router>
    </>
  );
}


export default App;
