




// **** NEXT.JS ****

// ServerSideProps API - Se introduce en la misma página donde quiero usar la API - ** No olvidar pasarle el prop a la página **

export async function getServerSideProps() {

    // Llamada a la Api Aquí
    const url = 'http://localhost:1337/blogs'
    const respuesta = await fetch(url)
    const NombreQueQuiera = await respuesta.json()

    // Este Return no se toca, es necesario
    return {
        props: {
            NombreQueQuiera 
        }
    }
}

// ///////////////////////////////////////