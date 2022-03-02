import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {

    const [cantidad, setCantidad] = useState(1)

    const {nombre, imagen, descripcion, precio, id} =  guitarra[0]

    const handleSubmit = e => {
       e.preventDefault()
    
        if(cantidad < 1) {
            alert('Cantidad no válida')
            return;
        }

       //Agregar al carrito
        const guitarraSeleccionada = {
            id,
            imagen: imagen[0].url,
            nombre,
            precio,
            cantidad,        
        };
        
        agregarCarrito(guitarraSeleccionada)

    }


  return (
      <Layout
        pagina={`Guitarra ${nombre}`}
      >
        <div className={styles.guitarra}>
            
            <Image layout='responsive' src={imagen[0].url} width={100} height={200}  alt={`Guitarra ${nombre}`} />
        
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio} € <span className={styles.iva}>/ IVA incl.</span></p>

                <form className={styles.formulario} onSubmit={handleSubmit} >
                    <label>Cantidad: </label>
                    <select
                    value={cantidad}
                    onChange={ e => setCantidad(parseInt(e.target.value)) }
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input
                        type='submit'
                        value='Agregar al carrito'
                    />
                </form>
                
            </div>
        </div>
      </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {

    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}

export default Producto