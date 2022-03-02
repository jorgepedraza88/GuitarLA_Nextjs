import Link from 'next/link'
import Layout from "../components/Layout"
import styles from '../styles/NotFound.module.css'


const NotFound = () => {
  return (
    <Layout>
        <div className={styles.no_encontrado}>
        <h1 className='heading'>Página no encontrada</h1>

        <Link href="/">Volver al Inicio</Link>
        </div>

    </Layout>
  )
}

export default NotFound