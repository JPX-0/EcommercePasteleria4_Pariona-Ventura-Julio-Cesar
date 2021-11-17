import { useEffect, useState } from "react";
import ItemList from "./main/items/ItemList";
import data from "../db/data";
import ItemDetailContainer from "./main/details/ItemDetailContainer";

const ItemListContainer = () => {
  const [dt, setDt] = useState([])
  let figurePromise = (time, task) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(task)
        } else {
          reject("Error")
        }
      }, time);
    });
  }
  useEffect(() => {
    fetch(`../../../db/data.json`)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    const messageData = document.querySelector("#messageData");
    const styleAlerts = (addClass, removeClass1, removeClass2) => {
      messageData.classList.add(addClass);
      messageData.classList.remove(removeClass1);
      messageData.classList.remove(removeClass2);
    }
    const functionAlert = (alerta) => {
      if(alerta === "cargando") {
        styleAlerts("msg__cargando", "msg__error", "msg__completado");
      } else if (alerta === "error") {
        styleAlerts("msg__error", "msg__completado", "msg__cargando");
      } else if (alerta === "completado") {
        styleAlerts("msg__completado", "msg__cargando", "msg__error");
      } else {
        messageData.classList.add("d-none");
      }
    }
    figurePromise(2000, functionAlert("cargando"))
      .then(()=>figurePromise(0, console.log("Iniciando la carga de los productos...")))
      .then(()=>figurePromise(0, data.map(d => console.log(d.id))))
      .then(()=>figurePromise(0, data.map(d => console.log(d.title))))
      .then(()=>figurePromise(0, data.map(d => console.log(d.description))))
      .then(()=>figurePromise(0, data.map(d => console.log(d.price))))
      .then(()=>figurePromise(0, data.map(d => console.log(d.pictureURL))))
      .then(()=>figurePromise(1000, functionAlert("completado")))
      .then(()=>figurePromise(0, functionAlert("none")))
      .then(()=>figurePromise(0, setDt(data)))
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