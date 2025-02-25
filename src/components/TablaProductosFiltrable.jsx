import { useState } from "react"
import BarraBusqueda from "./BarraBusqueda"
import TablaProductos from "./TablaProductos"

const TablaProductosFiltrable = ({ producto }) => {

    const [filtroTexto, setFiltroTexto] = useState('')
    const [enStock, setEnStock] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <BarraBusqueda
            filtroTexto={filtroTexto}
            enStock={enStock}
            cambioFiltroTexto={setFiltroTexto}
            cambioEnStock={setEnStock}
            />
          <TablaProductos
            producto={producto}
            filtroTexto={filtroTexto}
            enStock={enStock}
          />
            
        </div>
    )
}

export default TablaProductosFiltrable