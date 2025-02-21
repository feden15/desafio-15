import TablaProductosFiltrable from "./components/TablaProductosFiltrable"

const PRODUCTOS = [
  {categoria: "Frutas", precio: "$1", stock: true, nombre: "Manzana"},
  {categoria: "Frutas", precio: "$1", stock: true, nombre: "Fruta del dragón"},
  {categoria: "Frutas", precio: "$2", stock: false, nombre: "Maracuyá"},
  {categoria: "Verduras", precio: "$2", stock: true, nombre: "Espinaca"},
  {categoria: "Verduras", precio: "$4", stock: false, nombre: "Calabaza"},
  {categoria: "Verduras", precio: "$1", stock: true, nombre: "Guisantes"}
];

const App = () => {
  return (
    <>
      <TablaProductosFiltrable producto={PRODUCTOS}/>
    </>
  )
}

export default App