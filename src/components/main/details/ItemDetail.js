const ItemDetail = (props) => {
  return (
    <>
      <picture className="card__picture">
        <img src={props.content.pictureURL} alt={props.content.title} className="card__img"/>
      </picture>
      <article>
        <h2 className="card__title">{props.content.title}</h2>
        <p className="card__price">${props.content.price} x U</p>
        <p>{props.content.description}</p>
      </article>
    </>
  )};
  export default ItemDetail;