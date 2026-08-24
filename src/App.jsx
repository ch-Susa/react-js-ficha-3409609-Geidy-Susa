import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const disponibles = productos.filter(producto => producto.stock > 0);

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  const existeAgotado = productos.some(producto => producto.stock === 0);

  const categorias = [
    'Todas',
    ...new Set(productos.map(producto => producto.categoria))
  ];

  const productosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? productos
      : productos.filter(
          producto => producto.categoria === categoriaSeleccionada
        );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>

      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      <p>
        {existeAgotado
          ? 'Existe al menos un producto agotado'
          : 'No hay productos agotados'}
      </p>

      <section>
        <h2>Filtrar por categoría</h2>

        <select
          value={categoriaSeleccionada}
          onChange={e => setCategoriaSeleccionada(e.target.value)}
          className="filtro-categoria"
        >
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </section>

      <section>
        <h2>Productos</h2>

        <div className="productos">
          {productosFiltrados.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Productos disponibles</h2>

        <div className="productos">
          {disponibles.map(producto => (
            <ProductoCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;