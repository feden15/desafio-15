const BarraBusqueda = ({ filtroTexto, enStock, cambioFiltroTexto, cambioEnStock }) => {
  return (
      <form
        onSubmit={(e) => e.preventDefault()} // Para que no se recargue la página, impide apretar "enter"
        className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-3">
          <input
              type="text"
              value={filtroTexto}
              placeholder="Buscar..."
              onChange={(e) => cambioFiltroTexto(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-center gap-2 text-gray-700">
              <input
                  type="checkbox"
                  checked={enStock}
                  onChange={(e) => cambioEnStock(e.target.checked)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
              />
              Mostrar solo productos en stock
          </label>
      </form>
  );
};

export default BarraBusqueda