# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Taller 3
La aplicación permite gestionar un inventario de productos y cuenta con las siguientes funcionalidades:

Agregar productos.
Validar formularios.
Eliminar productos.
Confirmar antes de eliminar un producto.
Modificar el stock.
Editar productos existentes.
Buscar productos por nombre.
Filtrar productos por categoría.
Filtrar productos según su estado de stock.
Ordenar productos por nombre, precio y stock.
Calcular el valor total del inventario dinámicamente.
Mostrar productos disponibles y agotados.
Mostrar indicador de stock bajo.
Gestionar el estado de la aplicación con useState.
Persistir los productos utilizando localStorage.
Utilizar useEffect() para sincronizar los cambios del inventario con localStorage.
Limpiar los filtros de búsqueda, categoría, stock y ordenamiento.