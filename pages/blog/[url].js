import Layout from '../../components/Layout'
import { formatearFecha } from '../../components/helpers'
import Image from 'next/image'
import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {titulo, imagen, contenido, published_at} = entrada

  return (
      <Layout
        pagina={titulo}
        >
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen de ${titulo}`} />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>

                </article>
            
                
                
            </main>
      </Layout>
  )
}
// Como obtener paginas estáticas al hacer el BUILD
// ** Importante: Para crear un blog es una buena opción **
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.map(entrada => ({
        params: { url: entrada.url }
    }))
    return {
        paths,
        // Si el proyecto tiene muchas entradas 'true', si son pocas 'false'
        fallback: false
    }
}
// La función de NEXT.js getStaticProps necesita la función de arriba getStaticPaths
export async function getStaticProps({params: { url }}) {
    
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()


    return {
        props: {
            entrada: entrada[0]
        }
    }
}


// export async function getServerSideProps({query: {id}}) {
    
//     const url = `${process.env.API_URL}/blogs/${id}`
//     const respuesta = await fetch(url)
//     const entrada = await respuesta.json()


//     return {
//         props: {
//             entrada
//         }
//     }
// }


export default EntradaBlog