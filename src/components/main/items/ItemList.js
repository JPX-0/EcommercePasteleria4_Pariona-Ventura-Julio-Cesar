import Item from "./Item";
import ShowItem from "../buttons/ShowItem";

const ItemList = (props) => {

  return (
    <>
      <Item key={props.content.keyItem} content={props.content}/>
      <ShowItem key={props.content.id} content={props.content}/>
    </>
  )}
export default ItemList;