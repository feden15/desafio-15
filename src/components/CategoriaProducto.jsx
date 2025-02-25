const CategoriaProducto = ({ categoria }) => {
    return (
        <tr className="bg-gray-200 text-gray-700">
            <td
                colSpan="3"
                className="p-3 text-left font-bold uppercase"
            >
                {categoria}
            </td>
        </tr>
    );
};


export default CategoriaProducto 