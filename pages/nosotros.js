import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
        <main className='contenedor'>
            <h2 className='heading'>Nosotros</h2>

            <div className={styles.contenido}>

                <Image width={600} height={450} src='/img/nosotros.jpg' alt='nosotros'/>

                <div>
                    <p>
                    Phasellus at erat elit. Donec quis augue scelerisque, scelerisque tellus in, dignissim tortor. Vivamus ultricies lacus id nulla cursus placerat. Curabitur malesuada tellus eget libero bibendum, a pulvinar massa efficitur. Sed sodales metus urna, et aliquet ipsum porta nec. Integer porta ante ac nulla posuere interdum. Phasellus dolor mi, ullamcorper nec varius eget, rhoncus sed est. Maecenas sagittis vitae eros at molestie. Donec luctus, nulla id iaculis convallis, metus urna tincidunt neque, non sagittis justo mauris auctor libero.
                    </p>
                    <p>
                    Phasellus at erat elit. Donec quis augue scelerisque, scelerisque tellus in, dignissim tortor. Vivamus ultricies lacus id nulla cursus placerat. Curabitur malesuada tellus eget libero bibendum, a pulvinar massa efficitur. Sed sodales metus urna, et aliquet ipsum porta nec. Integer porta ante ac nulla posuere interdum. Phasellus dolor mi, ullamcorper nec varius eget, rhoncus sed est. 
                    </p>
                </div>

            </div>
        </main>
    </Layout>
  )
}

export default Nosotros