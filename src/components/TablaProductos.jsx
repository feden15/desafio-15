import CategoriaProducto from "./CategoriaProducto"
import Producto from "./Producto"

const TablaProductos = ({producto, filtroTexto, enStock}) => {
    
    const filas = [];
    let categoriaAnterior = null;

    producto.forEach((producto) => {

        if (producto.nombre.toLowerCase().indexOf(filtroTexto.toLowerCase()) === -1) {
            return
        }

        if (enStock && !producto.stock) {
            return
          }

        if (producto.categoria !== categoriaAnterior) {
            filas.push(
            <CategoriaProducto
                categoria={producto.categoria}
                key={producto.categoria} />
            );
        }
        filas.push(
            <Producto
                producto={producto}
                key={producto.nombre}
            />
        )
        categoriaAnterior = producto.categoria;
    })

    return (
        <table>

            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>

            <tbody>
                {filas}
            </tbody>

        </table>
    )
}

export default TablaProductos