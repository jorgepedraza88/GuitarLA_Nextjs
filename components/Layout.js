import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name='description' content='Sitio Web de Venta de Guitarrras'/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;900&display=swap" rel="stylesheet"/>
                  </Head>
        <Header
          guitarra={guitarra}
        />

        {children}

        <Footer />
    </div>
  )
}

Layout.defaultProps ={
  guitarra: null
}

export default Layout