import { useEffect, useState } from "react";
import CloseDetail from "../buttons/CloseDetail";
import ItemCount from "../buttons/ItemCount";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  const [det, setDet] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const asideDetail = document.getElementById(`detail${props.content.id}`);
      const openAside = document.getElementById(`show${props.content.id}`)
      openAside.addEventListener("click", () => {
        asideDetail.classList.add("aside--active");
        console.log(`Iniciando la carga del producto ${props.content.title}...`);
        setTimeout(() => {
          setDet(props.content)
          console.log(`Se completó la carga.`);
        }, 2000);
      })
      const closeAsideD = document.getElementById(`btnD-${props.content.id}`)
      const closeAsideM = document.getElementById(`btnM-${props.content.id}`)
      closeAsideD.addEventListener("click", () => {
        asideDetail.classList.remove("aside--active");
        setDet([])
      })
      closeAsideM.addEventListener("click", () => {
        asideDetail.classList.remove("aside--active");
        setDet([])
      })
    }, 100);
  })
  return (
    <>
      <aside className="aside" id={`detail${props.content.id}`}>
        <CloseDetail content={props.content} typeWindowClass="btn__closeAside--desktop" typeWindowID="D"/>
        <section className="detail">
          <CloseDetail content={props.content} typeWindowClass="btn__closeAside--mobile" typeWindowID="M"/>
          {
            det.length === 0 ?
            <p>cargando</p>:
            <>
              <ItemDetail content={props.content}/>
              <ItemCount stock={props.content.stock} initial={props.content.initial} id={props.content.id}/>
            </>
          }
        </section>
      </aside>
    </>
  )};
  export default ItemDetailContainer;