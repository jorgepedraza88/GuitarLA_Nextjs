import { useState, useEffect } from "react"
import Layout from "../components/Layout"
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0)

    // Este Effect itera sobre los elementos del carrito, sumandolos a un total y rellenando el State de setTotal
    useEffect(() => {
        const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )

        setTotal(calculoTotal)
    },[carrito])

  return (
    <Layout pagina={'Carrito de compras'}>
        <h1 className="heading">Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map( producto => (
                        <div key={producto.id} className={styles.producto}>
                            <div>
                                <Image 
                                layout="responsive" 
                                width={250}
                                height={520} 
                                src={producto.imagen} 
                                alt={producto.nombre} 
                                />
                            </div>
                            <div>
                                <p className={styles.nombre}>{producto.nombre}</p>
                                <div className={styles.cantidad}>
                                    <p>Cantidad: </p>
                                    <select
                                        value={producto.cantidad}
                                        className={styles.select}
                                        onChange={ e => actualizarCantidad({
                                            cantidad: e.target.value,
                                            id: producto.id
                                        })}
                                        >
                                        
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <p className={styles.precio}><span>{producto.precio}</span> €</p>
                                <p className={styles.subtotal}>Subtotal: <span>{producto.precio * producto.cantidad}</span>€</p>
                                <button
                                    type="button"
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >
                                Eliminar articulo
                                </button>
                            </div>
                    
                   

                    </div>
                    ))
                )}
            </div>
            <div className={styles.resumen}>
                
            {/* Si total del carrito es mayor que 0, entonces muestra el resumen de la compra */}
                {total > 0 ? (
                    <>
                        <h2>Resumen del Pedido</h2>
                        <p>Total: {total - (total * 0.21)} €</p>
                        <p>Impuestos incluidos: {total * 0.21} €</p>
                        <p>Total(imp.incl): {total} €</p>
                    </>
                ) : <p>No hay productos en el carrito</p>}
            </div>
        </main>
    </Layout>
  )
}

export default Carrito