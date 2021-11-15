import {AiOutlineShoppingCart} from "react-icons/ai";
import imgLogo from "../../assets/logo.jpg";

let item = 0;
let title = "Pasteleria Yuumy";

const CartWidget = (props) => {
  return (
    <>
      {
        props.title === "LOGO" ?
        <a href="http://localhost:3000/" className="header__logo">
          <img src={imgLogo} alt={title} className="header__logo-img"></img>
          <span className="header__logo-text">{title}</span>
        </a> : 
        <li className="header__list">
          {
            props.icon ? 
            <button className="btn btn__shop">
              <i className="btn__shop-icon"><AiOutlineShoppingCart /></i>
              <span className="btn__shop-indicator">{item}</span>
            </button> : 
          <a href={props.title} className="header__title">{props.title}</a>
          }
        </li>
      }
    </>
  )};
export default CartWidget;