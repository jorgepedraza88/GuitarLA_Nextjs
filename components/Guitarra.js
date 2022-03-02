import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {
    const {nombre, url, imagen, descripcion, precio} = guitarra

    console.log(guitarra)
    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' src={imagen[0].url} width={145} height={340} alt={`Guitarra ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>{precio} €</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>
                        Ver producto
                    </a>
                </Link>
            </div>
        </div>
  )
}

export default Guitarra