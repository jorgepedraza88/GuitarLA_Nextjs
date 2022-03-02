import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    // Recoger carrito del Local Storage y si no hay nada, arreglo vacio.
    const carritoLS = JSON.parse( localStorage.getItem('carrito') ?? [] )
    setCarrito(carritoLS)
  },[])

  // Guardar carrito en Local Storage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  },[carrito])


  // Función para agregar productos al carrito

  const agregarCarrito = producto => {
    if(carrito.some( articulo => articulo.id === producto.id)) {
        const carritoActualizado = carrito.map( articulo => {
          if(articulo.id === producto.id){
            articulo.cantidad = producto.cantidad
          }
          return articulo;
        })
        setCarrito(carritoActualizado)
    } else {
        setCarrito([...carrito, producto])
    }
  }

  // Función para actualizar la cantidad desde el carrito

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map( articulo => {
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo;
    });

    setCarrito(carritoActualizado)
  }

  // Función para eliminar del carrito
  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id )
    setCarrito(carritoActualizado)
  }

  return <Component 
  {...pageProps} 
  carrito={carrito}
  agregarCarrito={agregarCarrito}
  actualizarCantidad={actualizarCantidad}
  eliminarProducto={eliminarProducto}
  />
}

export default MyApp
