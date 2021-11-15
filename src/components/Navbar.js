import CartWidget from "./navbar/CartWidget"

const NavBar = () => {
  return (
    <nav className="header__container">
      <CartWidget title="LOGO"/>
      <ul className="header__menu">
        <CartWidget title="Inicio"/>
        <CartWidget title="Tienda"/>
        <CartWidget title="Ofertas"/>
        <CartWidget icon="icon"/>
      </ul>
    </nav>
  )};
export default NavBar;