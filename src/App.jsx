import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
import { useState } from "react";

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [categoria, setCategoria] = useState("Todas");

  // Descuento utilizando map()
  const productosConDescuento = productos.map(producto => ({
    ...producto,
    descuento: 10,
    precioFinal: producto.precio * 0.90
  }));

  const disponibles = productosConDescuento.filter(
    producto => producto.stock > 0
  );

  const valorInventario = productosConDescuento.reduce(
    (total, producto) =>
      total + producto.precioFinal * producto.stock,
    0
  );

  const hayAgotados = productosConDescuento.some(
    producto => producto.stock === 0
  );

  const productosFiltrados = productosConDescuento.filter(producto => {

    const coincideNombre =
      producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles ||
      producto.stock > 0;

    return (
      coincideNombre &&
      coincideCategoria &&
      coincideStock
    );
  });

  // Limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">

      <h1>Tienda tecnológica</h1>

      <br />

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      <br /><br />

      <select
        value={categoria}
        onChange={(evento) =>
          setCategoria(evento.target.value)
        }
      >

        <option value="Todas">Todas</option>
        <option value="Accesorios">Accesorios</option>
        <option value="Almacenamiento">Almacenamiento</option>
        <option value="Audio">Audio</option>
        <option value="Oficina">Oficina</option>
        <option value="Pantallas">Pantallas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Componentes">Componentes</option>
        <option value="Fabricación aditiva">
          Fabricación aditiva
        </option>

      </select>

      <br /><br />

      {/* BOTÓN LIMPIAR FILTROS */}
      <button
        className="btn-limpiar"
        onClick={limpiarFiltros}
      >
        Limpiar filtros
      </button>

      <br /><br />

      <p>Productos disponibles: {disponibles.length}</p>

      <p>
        Valor del inventario: $
        {valorInventario.toLocaleString("es-CO")}
      </p>

      <p>
        ¿Hay productos agotados?{" "}
        {hayAgotados ? "Sí" : "No"}
      </p>

      <p>
        Productos encontrados: {productosFiltrados.length}
      </p>

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }
        />

        Mostrar únicamente disponibles
      </label>

      <section className="productos">

        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}

        {productosFiltrados.length === 0 && (
          <p>No se encontraron productos.</p>
        )}

      </section>

      <section className="productos">

        <h2>Productos disponibles</h2>

        {disponibles.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}

      </section>

    </main>
  );
}

export default App;
