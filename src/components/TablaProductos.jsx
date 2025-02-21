import CategoriaProducto from "./CategoriaProducto"
import Producto from "./Producto"

const TablaProductos = ({producto}) => {
    
    const filas = [];
    let categoriaAnterior = null;

    producto.forEach((producto) => {
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