const listaCompras = ["sal", "azucar", "vino", "pescado", "queso"]
const nuevoElemento = listaCompras.push("aceite de girasol");
const quitarElemento = listaCompras.pop("aceite de girasol")
console.log(listaCompras);

const peliculas = [
    {titulo: "Mad Max: Furia en la carretera", director: "George Miller", fecha: 2015},
    {titulo: "El renacido", director: "Alejandro González Iñárritu", fecha: 2015},
    {titulo: "John Wick 3: Parabellum", director: "Chad Stahelski", fecha: 2019}
]

const pelPosteriores = peliculas.filter(pelicula => pelicula.fecha > 2010)
console.log(pelPosteriores);

const dirPeliculas = peliculas.map(pelicula => {
    return pelicula.director;
})
console.log(dirPeliculas);

const pelOriginales = peliculas.map(pelicula => {
    return pelicula.titulo;
})
console.log(pelOriginales)

const peliculasDirectores = dirPeliculas.concat(pelOriginales)
console.log(peliculasDirectores);

const pelPropagacion = [...dirPeliculas, ...pelPosteriores]
console.log(pelPropagacion);
