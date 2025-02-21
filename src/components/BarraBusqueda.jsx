const BarraBusqueda = ({ filtroTexto, enStock, cambioFiltroTexto, cambioEnStock }) => {
    return (
        <form>

          <input
            type="text"
            value={filtroTexto}
            placeholder="Buscar..."
            onChange={(e) => cambioFiltroTexto(e.target.value)}/>

          <label>
            <input
              type="checkbox"
              checked={enStock}
              onChange={(e) => cambioEnStock(e.target.checked)}/>
            {' '} Mostrar solo productos en stock
          </label>
        </form>
    )
}

export default BarraBusqueda