const Producto = ({ producto }) => {
    const nombre = producto.stock ? (
        producto.nombre
    ) : (
        <span className="text-red-500">{producto.nombre}</span>
    );

    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="p-3">{nombre}</td>
            <td className="p-3">{producto.precio}</td>
        </tr>
    );
};


export default Producto