const OpenDetail = (props) => {
  return (
    <>
      <button className="btn btn__showDetail" id={`show${props.content.id}`}>Mostrar Detalles</button>
    </>
  )};
export default OpenDetail;