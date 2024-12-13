# README: Rick and Morty API

## Descripción
Este script obtiene datos de la API de **Rick and Morty**, filtra los personajes vivos, reemplaza los espacios en los nombres por guiones bajos, y muestra en consola la información relevante: **id**, **name**, **status**, y **gender**.

## Funcionamiento
1. **Solicita datos** de la API de personajes.
2. **Filtra** los personajes con estado **"Alive"**.
3. **Modifica** los nombres reemplazando los espacios por guiones bajos.
4. **Muestra** en consola los resultados con la estructura solicitada.

## Ejemplo de salida
```json
{
  "results": [
    { "id": 1, "name": "Rick_Sanchez", "status": "Alive", "gender": "Male" },
    { "id": 2, "name": "Morty_Smith", "status": "Alive", "gender": "Male" },
    ...
  ]
}
```

## Función Principal
```javascript
getData("https://rickandmortyapi.com/api/character");
```

## Manejo de errores
Si hay un problema con la API, el error se mostrará en consola.
