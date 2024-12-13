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

        // Filtra personajes vivos
        const alive_characters = json_data.results.filter(character => character.status === "Alive");

        // Reemplaza espacios por guiones bajos en los nombres
        const modified_names_characters = alive_characters.map(character => {
            return {
                ...character,                               // Copia todas las propiedades del objeto
                name: character.name.replace(/ /g, "_")     // Modifica el nombre
            };
        });

        // Imprime los datos 
        console.log("Personajes vivos con nombres modificados:", modified_names_characters);

    } catch (error) {
        // Muestra error en caso de ocurrir
        console.error("Ocurrió un error:", error.message);
    }
}

// Ejecuta la funcion pasando la URL de la API
getData("https://rickandmortyapi.com/api/character");