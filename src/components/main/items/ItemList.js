import Item from "./Item";
import OpenDetail from "../buttons/OpenDetail";

const ItemList = (props) => {

  return (
    <>
      <Item content={props.content}/>
      <OpenDetail content={props.content}/>
    </>
  )}
export default ItemList;