const CategoriaProducto = ({ categoria }) => {
    return (
        <>
            <tr>
                <th colSpan="2">
                    {categoria}
                </th>
            </tr>
        </>
      );
}

export default CategoriaProducto