import { useEffect, useState } from "react";

const ItemCount = (props) => {
  const [products, setProducts] = useState(props.initial);
  const [enStock, setEnStock] = useState(props.stock);
  const addToCar = document.getElementById(`buy${props.id}`);
  console.log(addToCar);
  if(enStock === 0) {
    addToCar.style.pointerEvents = "none";
    addToCar.style.color = "red";
    addToCar.style.opacity = "0.5";
    console.log(`Ya no hay mas productos en Stock`);
  }
  const increment = () => {
    if(products < enStock) setProducts(products + 1);
  }
  const decrement = () => {
    if(products > props.initial) setProducts(products - 1);
  }
  const onAdd = () => {
    if(products < enStock || products === enStock) {
      console.log(`Se agrego al carrito ${products} productos`);
      setEnStock(enStock - products);
    }
    if(products > enStock) {
      console.log(`La cantidad que desea comprar supera el numero de Stock`);
    }
  }
  return (
    <>
      <div className="card__buttons">
        <button onClick={decrement} className="btn btn__count">-</button>
        <p className="card__products">Productos: {products}</p>
        <button onClick={increment} className="btn btn__count">+</button>
      </div>
      <button onClick={onAdd} className="btn btn__addToCar" id={`buy${props.id}`}>Carrito +</button>
    </>
  )};
export default ItemCount;