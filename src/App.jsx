import ProductoCard from './components/ProductoCard';
import './App.css';
import { useState } from "react";
import { productos as productosIniciales } from "./data/productos";
import FormularioProducto from "./components/FormularioProducto";

function App() {
  const [productos, setProductos] =
    useState(productosIniciales);

  const [busqueda, setBusqueda] = useState("");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [categoria, setCategoria] = useState("Todas");

  const agregarProducto = (nuevoProducto) => {
    setProductos([
      ...productos,
      nuevoProducto
    ]);
  };

  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter(
      producto => producto.id !== id
    );
    setProductos(nuevaLista);
  };

  const modificarStock = (id, cambio) => {
    const nuevosProductos = productos.map(producto => {

      if (producto.id === id) {
        return {
          ...producto,
          stock: Math.max(
            0,
            producto.stock + cambio
          )
        };
      }
      return producto;
    });
    setProductos(nuevosProductos);
  };

  const productosConDescuento = productos.map(producto => ({
    ...producto,
    descuento: 10,
    precioFinal: producto.precio * 0.90
  }));

  const disponibles = productosConDescuento.filter(
    producto => producto.stock > 0
  );

  const productosAgotados = productos.filter(
    producto => producto.stock === 0
  );

  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  const productosFiltrados =
    productosConDescuento.filter(producto => {

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

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <section className="panel-control">
        <div className="buscador">
          <label>Buscar producto</label>

          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(evento) => {
              setBusqueda(evento.target.value);
            }}/>
        </div>

        <FormularioProducto
          onAgregar={agregarProducto}/>
        <div className="filtros">
          <select
            value={categoria}
            onChange={(evento) =>
              setCategoria(evento.target.value)
            }>
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
          <button className="btn-limpiar" onClick={limpiarFiltros}>Limpiar filtros</button>
        </div>
      </section>

      <section className="estadisticas">
        <div className="estadistica">
          <span className="estadistica-icono"></span>
          <div>
            <span>Productos registrados</span>
            <strong>{productos.length}</strong>
          </div>
        </div>

        <div className="estadistica">
          <span className="estadistica-icono"></span>
          <div>
            <span>Productos agotados</span>
            <strong>{productosAgotados.length}</strong>
          </div>
        </div>

        <div className="estadistica">
          <span className="estadistica-icono"></span>
          <div>
            <span>Valor del inventario</span>
            <strong>
              ${valorInventario.toLocaleString("es-CO")}
            </strong>
          </div>
        </div>

        <div className="estadistica">
          <span className="estadistica-icono"></span>
          <div>
            <span>Productos encontrados</span>
            <strong>{productosFiltrados.length}</strong>
          </div>
        </div>
      </section>

      <label className="checkbox-disponibles">
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(evento.target.checked)
          }/>
        Mostrar únicamente disponibles
      </label>

      <section className="seccion-productos">
        <h2>Productos</h2>
        <div className="productos">
          {productosFiltrados.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              modificarStock={modificarStock}/>
          ))}

          {productosFiltrados.length === 0 && (
            <p className="sin-productos">No se encontraron productos.</p>
          )}
        </div>
      </section>

      <section className="seccion-productos">
        <h2>Productos disponibles</h2>
        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              onEliminar={eliminarProducto}
              modificarStock={modificarStock}/>
          ))}
        </div>
      </section>
    </main>
  );
}
export default App;