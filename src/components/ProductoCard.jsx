
function ProductoCard({
  producto,
  onEliminar,
  modificarStock
}) {

  const formatearPrecio = precio => {
    return precio.toLocaleString("es-CO");
  };
  return (
    <article className="producto-card">

      <h2>{producto.nombre}</h2>

      <p>
        Precio original:{" "}
        <s>${formatearPrecio(producto.precio)}</s>
      </p>

      <p className="precio-descuento">
        Precio con descuento: $
        {formatearPrecio(producto.precioFinal)}
      </p>

      <p className="descuento">
        Descuento: {producto.descuento}%
      </p>

      <p>
  <button onClick={() => modificarStock(producto.id, -1)}>
    -
  </button>

  Stock: {producto.stock}

  <button onClick={() => modificarStock(producto.id, 1)}>
    +
  </button>
</p>

      <p>
        Categoría: {producto.categoria}
      </p>

      {producto.stock > 0 ? (
        <p className="disponible">
          Disponible
        </p>
      ) : (
        <p className="agotado">
          Agotado
        </p>
      )}
      <button
    onClick={() => onEliminar(producto.id)}
    >
      Eliminar
    </button>
    </article>
  );
}
// ¿Por qué usamos filter() y no find()?
//  Porque filter() devuelve un nuevo arreglo con todos los elementos que cumplen una
//  condición en cambio, find() devuelve solamente el primer elemento que cumple la condición,
//  por lo que no sirve para construir directamente la lista sin el elemento eliminado.
export default ProductoCard;
