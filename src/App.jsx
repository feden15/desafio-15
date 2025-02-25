import TablaProductosFiltrable from "./components/TablaProductosFiltrable"
import PRODUCTOS from "./constants/PRODUCTOS"

const App = () => {
  return (
    <>
      <TablaProductosFiltrable producto={PRODUCTOS}/>
    </>
  )
}

export default App