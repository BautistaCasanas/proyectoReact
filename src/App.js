//Componentes
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailComponent from './componentes/ItemDetailComponent';

// APRENDER=> sisi: spread operator, destructuring, promise (promesas), let, var, arrow functions, string como template literals, map, métodos de arrays (foreach, map, find, filter)



const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main>
        <ItemListContainer  greetings="Bienvenidos a AllShop" />
        <br/>
        <ItemDetailComponent/>
      </main>
    </>
  );
}


export default App;
