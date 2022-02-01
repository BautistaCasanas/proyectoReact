import './NavBar.css';
import CartWidget from '../componentes/CartWidget';
import img from '../img/allShop.png';


const NavBar =()=>{
 return(
 <nav className="Navigation">

    <img src={img} id="imgLogoPagina" alt='logo-pagina'/>

    <ul className="NavBar">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
    </ul>

    <CartWidget></CartWidget>
 </nav>)
};

export default NavBar;

