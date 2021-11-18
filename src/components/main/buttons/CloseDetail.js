const CloseDetail = (props) => {
  return (
    <>
      <button className={`btn btn__closeAside ${props.typeWindowClass}`} id={`btn${props.typeWindowID}-${props.content.id}`}></button>
    </>
  )};
export default CloseDetail;