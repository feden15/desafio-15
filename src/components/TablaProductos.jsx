import CategoriaProducto from "./CategoriaProducto"
import Producto from "./Producto"

const TablaProductos = ({ producto, filtroTexto, enStock }) => {
    const filas = [];
    let categoriaAnterior = null;

    producto.forEach((producto) => {
        if (producto.nombre.toLowerCase().indexOf(filtroTexto.toLowerCase()) === -1) {
            return;
        }

        if (enStock && !producto.stock) {
            return;
        }

        if (producto.categoria !== categoriaAnterior) {
            filas.push(
                <CategoriaProducto categoria={producto.categoria} key={producto.categoria} />
            );
        }
        filas.push(
            <Producto producto={producto} key={producto.nombre} />
        );
        categoriaAnterior = producto.categoria;
    });

    return (
        <div className="overflow-x-auto mt-5 bg-white p-4 shadow-md rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-blue-500 text-white rounded-lg">
                        <th className="p-3 text-left">Nombre</th>
                        <th className="p-3 text-left">Precio</th>
                    </tr>
                </thead>
                <tbody>{filas}</tbody>
            </table>
        </div>
    );
};


export default TablaProductos