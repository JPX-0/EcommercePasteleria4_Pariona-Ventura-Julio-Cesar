import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";

const data = [
  {
    id:1,
    title: "Pastel de Médico",
    stock: 5,
    initial: 1,
    price: 15,
    pictureURL: `${product1}`,
    description: "Descripcion 1"
  },
  {
    id:2,
    title: "Pastel de Quinceañera",
    stock: 20,
    initial: 1,
    price: 25,
    pictureURL: `${product2}`,
    description: "Descripcion 2"
  },
  {
    id:3,
    title: "Pastel de Estudios",
    stock: 8,
    initial: 1,
    price: 18,
    pictureURL: `${product3}`,
    description: "Descripcion 3"
  }
];
export default data;