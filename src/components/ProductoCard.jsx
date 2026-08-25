function ProductoCard({ producto }) {

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
        Stock: {producto.stock}
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

    </article>
  );
}

export default ProductoCard;
