import { useEffect, useState } from "react";
import ItemList from "./main/items/ItemList";
import data from "../db/data";
import ItemDetailContainer from "./main/details/ItemDetailContainer";

let getDatos = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) { //para simular un fallo en la llamada debe cambiar el valor a !data
        resolve(task);
      } else {
        reject("Error")
      }
    }, time);
  });
}

const styleAlerts = (tagDiv, addClass, removeClass1, removeClass2) => {
  tagDiv.classList.add(addClass);
  tagDiv.classList.remove(removeClass1);
  tagDiv.classList.remove(removeClass2);
}

const ItemListContainer = () => {
  const [dt, setDt] = useState([])
  useEffect(() => {
    const messageData = document.querySelector("#messageData");
    const functionAlert = (alerta) => {
      if(alerta === "cargando") {
        styleAlerts(messageData, "msg__cargando", "msg__error", "msg__completado");
      } else if (alerta === "error") {
        styleAlerts(messageData, "msg__error", "msg__completado", "msg__cargando");
      } else if (alerta === "completado") {
        styleAlerts(messageData, "msg__completado", "msg__cargando", "msg__error");
      } else {
        messageData.classList.add("d-none");
      }
    }
    getDatos(2000, functionAlert("cargando"))
      .then(()=>getDatos(0, console.log("Iniciando la carga de los productos...")))
      .then(()=>getDatos(0, data.map(d => console.log(d.title))))
      .then(()=>getDatos(0, data.map(d => console.log(d.price))))
      .then(()=>getDatos(0, data.map(d => console.log(d.pictureURL))))
      .then(()=>getDatos(0, data.map(d => console.log(d.description))))
      .then(()=>getDatos(1000, functionAlert("completado")))
      .then(()=>getDatos(0, functionAlert("none"))) //elimina el mensaje de cargando, completdo y error.
      .then(()=>getDatos(0, setDt(data)))
      .catch((err)=>{
        console.log(err);
        functionAlert("error");
      })
      .finally(()=> console.log("Se completó la carga."))
  },[])
  return (
    <>
      <p className="msg" id="messageData"></p>
      {
        dt.length > 0 && dt.map((art) =>
          <figure key={art.id} className="card">
            <ItemList content={art} />
            <ItemDetailContainer content={art}/>
          </figure>
        )
      }
    </>
  )};
export default ItemListContainer;