const CategoriaProducto = ({ categoria }) => {
    return (
        <tr className="bg-gray-200 text-gray-700">
            <th colSpan="3" className="p-3 text-left uppercase">
                {categoria}
            </th>
        </tr>
    );
};


export default CategoriaProducto 