
let opciones
const peliculas = []

//------------------------clase constructora----------------------------

class Pelicula{
    constructor(nombre, genero, estado){
        this.nombre = nombre.toUpperCase()
        this.genero = genero.toUpperCase()
        this.estado = estado.toUpperCase()
    }

    alquilarPelicula(){
        this.estado = "ALQUILADA"
    }   
}

//-------------películas cargadas para probar la aplicacion------------

generadorAutomaticoPrueba()


//-------------estructura principal------------------------------------

function comenzar(){
do{
    opciones = prompt("Ingrese la opcion q desea: \n1 -> Ver un listado de películas en consola. \n2 -> Buscar una película. \n3 -> Agregar una nueva película. \n4 -> Quitar una película \ns -> Salir")

    switch(opciones){
    case '1':
            listadoPeliculas()
        break
    case '2':
         buscarPelicula()
        break
    case '3':
            ingresaPelicula()
        break
    case '4':
            quitarPelicula()
        break
    }

} while(opciones !== 's')
}


//---------------------------funciones------------------------------------


function ingresaPelicula(){

    let nombre = prompt("Ingrese el nombre de la pelicula").toUpperCase()
    let genero = prompt("Ingrese el genero: \n-accion \n-comedia \n-drama \n-documental").toUpperCase()
    let estado = prompt("Ingrese el estado: disponible/alquilada")
    
    peliculas.push(new Pelicula (nombre, genero, estado))
    
}

function buscarPelicula(){
    
    let peliculaABuscar = prompt('Ingrese la pelicula a buscar').toUpperCase()
    let contador = 0

    //use un ciclo for común xq aún no se como buscar un valor de una propiedad dentro de un array de objetos

    for (let i=0; i < peliculas.length; i++){
        
        let name = peliculas[i].nombre //en name guardo el nombre de la pelicula en esta iteracion para luego compararla
        
        if (name === peliculaABuscar){
            alert( ("La película " + name + " existe y está " + peliculas[i].estado))

            if (peliculas[i].estado === "DISPONIBLE"){
                let confirmacion = confirm("Desea alquilarla?")
                if (confirmacion){
                    peliculas[i].alquilarPelicula()
                }
            }
            break
        }

        contador ++ //si la pelicula que se busca no esta el contador va a igualar el largo del array y entra en el if
        if (contador === peliculas.length){
            alert(("la pelicula no existe"))
        }
    }
}

function quitarPelicula(){
    
    let peliculaAQuitar = prompt('Ingrese la pelicula a quitar').toUpperCase()
    let contador = 0

    for (let i=0; i < peliculas.length; i++){
        
        let name = peliculas[i].nombre //en name guardo el nombre de la pelicula en esta iteracion para luego compararla
        
        if (name === peliculaAQuitar){

                let confirmacion = confirm("Desea quitarla de la lista?")
                if (confirmacion){
                    peliculas.splice([i],1)
                    break
                }
        }
                

        contador ++ //si la pelicula que se busca no esta el contador va a igualar el largo del array y entra en el if
        if (contador === peliculas.length){
            alert(("la pelicula no existe"))
        }
    }
}

function listadoPeliculas(){
   
        console.table(peliculas)
    
}

function generadorAutomaticoPrueba(){

    peliculas.push(new Pelicula('rambo', 'accion', 'alquilada'))
    peliculas.push(new Pelicula('robocop', 'accion', 'disponible'))
    peliculas.push(new Pelicula('los bañeros locos', 'comedia', 'disponible'))
    peliculas.push(new Pelicula('transformers', 'accion', 'alquilada'))
    peliculas.push(new Pelicula('el oceano', 'documental', 'alquilada'))
    peliculas.push(new Pelicula('top gun', 'accion', 'alquilada'))
    peliculas.push(new Pelicula('indestructibles', 'accion', 'disponible'))
    peliculas.push(new Pelicula('terminator', 'accion', 'disponible'))

}

