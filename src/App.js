//Componentes

import { CartProvider } from "./context/CartContext";
import Router from "./router/Router";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router />
      </CartProvider>

      <footer>
        <center>
          <h3 style={{marginTop:"100px"}}>By Bautista Casañas</h3>
        </center>
      </footer>
    </>
  );
};

export default App;
