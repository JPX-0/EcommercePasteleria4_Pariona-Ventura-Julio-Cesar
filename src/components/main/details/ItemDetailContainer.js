import ItemCount from "../buttons/ItemCount";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = (props) => {
  return (
    <>
      <button className="btn btn__closeAside"></button>
      <aside className="aside" id={`detail${props.content.id}`}>
        <section>
          <ItemDetail content={props.content} />
          <ItemCount stock={props.content.stock} initial={props.content.initial} id={props.content.id}/>
        </section>
      </aside>
    </>
  )};
  export default ItemDetailContainer;