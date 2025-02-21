const Producto = ({ producto }) => {
    const nombre = producto.stock ? producto.nombre :
        <span style={{ color: 'red' }}>
            {producto.nombre}
        </span>

    return (
        <tr>
            <td>{nombre}</td>
            <td>{producto.precio}</td>
        </tr>
    )
}

export default Producto