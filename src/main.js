import data from './data/pokemon/pokemon.js';

//--------------------------------Lista de type pokémon--------------------------------------
let types = document.getElementById('selectorType')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectType = document.createElement('select');
//crearSelectType.id = 'select';
types.appendChild(crearSelectType);


//inicializa la variable que sera el nuevo set de datos irrepetibles
let typePokemon = new Set();
//aqui se iteran los datos de tipo de pokemon con un forEach donde pokemonActual tiene la lista donde solo estan los tipos de pokemon, 
data.pokemon.forEach(pokemonActual => {
        //console.log(pokemonActual.type)
        //Aqui vuelve a iterar la lista para sacar cada tipo de pokemon aunque la lista este repetida
        pokemonActual.type.forEach(tipos => {
            //console.log(tipos);
            //Agrega la lista con los tipos de pokemon repetidos y creara una nueva agregando los tipos sin repetirlos
            typePokemon.add(tipos);
        })
    })
    //console.log(typePokemon);

//Agregando nuestros "Options" a nuestro "Select"
//Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento 
typePokemon.forEach(tipos => {
    let type = document.createElement("option");
    type.value = tipos;
    type.text = tipos;
    crearSelectType.appendChild(type);
})

//--------------------------------------Ordenar pokémon---------------------------------------------------------
let generacion = document.getElementById('selectorGeneration')
    //Creando el Select que irá dentro del Div "productos"
let crearSelectGeneracion = document.createElement('select');
generacion.appendChild(crearSelectGeneracion);

//Llenando el arreglo que contendrá los "Options" de nuestro "Select"
let orderRegion = new Set();
let number = document.createElement("option");
number.value = "Número";
number.text = "Número";
crearSelectGeneracion.append(number);
data.pokemon.forEach(actual => {
    actual.generation.name;
    //console.log(actual.generation.name)
    orderRegion.add(actual.generation.name);

})

//Agregando nuestros "Options" a nuestro "Select"
orderRegion.forEach(regionActual => {
        let region = document.createElement("option");
        region.value = regionActual;
        region.text = regionActual;
        crearSelectGeneracion.append(region);


    })
    //-------------------------Mostrar Pokemon---------------------------------
let containerPokemon = document.getElementById("containerPokemon");
//crear un for
data.pokemon.forEach(pokemonActual => {
    let mostrarPokemon = document.createElement("div");
    //mostrarPokemon.id = pokemonActual.num + " " + pokemonActual.name;
    containerPokemon.append(mostrarPokemon);
    let mostrarImg = document.createElement("img");
    mostrarImg.src = pokemonActual.img;
    mostrarPokemon.append(mostrarImg);
    let tituloImg = document.createElement("h4");
    tituloImg.innerHTML = pokemonActual.num + " " + pokemonActual.name;
    mostrarPokemon.append(tituloImg);

});
//console.log(contenedor);