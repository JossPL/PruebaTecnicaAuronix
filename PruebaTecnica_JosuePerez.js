// Funcion para obtener los datos de la API
async function getData(apiUrl) {
    try {
        // Solicitud GET a la URL
        const result = await fetch(apiUrl);

        // Verificar que se obtuvieron resultados  de la API
        if (!result.ok) {
            throw new Error(`No se pudo obtener los datos: ${result.status}`);
        }

        // Convierte los resultados a JSON
        const json_data = await result.json();

        // Imprime los datos 
        console.log("Personajes obtenidos:", json_data);

    } catch (error) {
        // Muestar error en caso de ocurrir
        console.error("Ocurrió un error:", error.message);
    }
}

// Ejecuta la funcion pasando la URL de la API
getData("https://rickandmortyapi.com/api/character");