import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import ListadoBlog from '../components/ListadoBlog'


export default function Home({guitarras, curso, entradas}) {



  return (
    <Layout
      pagina='Inicio'
      guitarra={guitarras[3]}
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        <Curso curso={curso}></Curso>
        <section className='contenedor'>
          <ListadoBlog 
            entradas={entradas}
          />
        </section>
    </Layout>
    
  )
}

// Llamada a la API con varias URLs y peticiones - Repasar Promises
export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlCursos),
      fetch(urlBlog)
  ])

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()

  ])


  return {
      props: {
          guitarras,
          curso,
          entradas
      }
  }
}