import { useEffect, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import data from "../../db/data"


const ItemList = () => {
  const [dt, setDt] = useState([])
  let figurePromise = (time, task) => {
    return new Promise((resolve, reject) => {
        if (data) {
            setTimeout(() => {
              resolve(task)
            }, time);
        } else {
            reject("Error")
        }
    });
  }
  useEffect(() => {
    const messageData = document.getElementById("messageData");
    const functionAlert = (alerta) => {
      if(alerta == "cargando") {
        messageData.classList.add("msg__cargando")
      } else if (alerta == "error") {
        messageData.classList.add("msg__error")
      } else {
        messageData.classList.remove("msg__cargando")
        messageData.classList.remove("msg__error")
        messageData.classList.add("d-none")
      }
    }
    figurePromise(0, console.log("Iniciando la carga de los productos..."))
      .then(()=>figurePromise(2000, functionAlert("cargando")))
      .then(()=>figurePromise(2000, data.map(d => console.log(d.id))))
      .then(()=>figurePromise(2000, data.map(d => console.log(d.title))))
      .then(()=>figurePromise(2000, data.map(d => console.log(d.description))))
      .then(()=>figurePromise(2000, data.map(d => console.log(d.price))))
      .then(()=>figurePromise(2000, data.map(d => console.log(d.pictureURL))))
      .then(()=>figurePromise(0, functionAlert("completado")))
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
        dt !== [] && dt.map((art) =>
          <figure key={art.id} className="card">
            <Item content={art}/>
            <ItemCount stock={art.stock} initial={art.initial} id={art.id}/>
          </figure>
        )
      }
    </>
  )}
export default ItemList;