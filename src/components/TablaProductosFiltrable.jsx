import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"

const TablaProductosFiltrable = ({ producto }) => {
    return (
        <div>
          <BarraBusqueda />
          <TablaProductos producto={producto} />
        </div>
    )
}

export default TablaProductosFiltrable