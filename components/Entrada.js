import { formatearFecha } from './helpers'
import styles from '../styles/Entrada.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Entrada = ({post}) => {

    const {titulo, resumen, imagen, published_at, id, url } = post
    
return (
    <article>
        <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`imagen blog ${titulo}`}/>

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer Entrada
                </a>
            </Link>
        </div>
    </article>
  )
}

export default Entrada