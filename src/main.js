import data from './data/pokemon/pokemon.js';
import {
  getPokemonTypes,
  filterTypes,
  getPokemonRegion,
  filterRegion,
  sortData,
} from './data.js';

const fullData = data.pokemon;
let filteredData = data.pokemon;

document.getElementById("menuBTN").addEventListener("click", () => {
  const mostrar = document.getElementById("navegacion").className;
  if (mostrar == "") {
    document.getElementById("navegacion").setAttribute("class", "show");
  } else {
    document.getElementById("navegacion").removeAttribute("class", "show");
  }
});

//-------- Creacion de div para mostrar los pokemon en la pagina inicial---------

const createPokemonTypes = (dataPokemon) => {

  let contenedor = document.getElementById("containerPokemon"); /*Cramos variable para el contenedor de todos los div pokemon*/
  let mostrarPokemon = document.createElement("div"); /*Creamos div individual, el cuál guardará a un solo pokémon */
  mostrarPokemon.setAttribute("class", "pokeDiv");
  contenedor.appendChild(mostrarPokemon);

  /*Mostrar Imágen*/
  let mostrarImg = document.createElement("img");
  mostrarImg.src = dataPokemon.img;
  mostrarImg.setAttribute("class", "pokeImg");
  mostrarPokemon.appendChild(mostrarImg);

  /*Creamos div que contenga solo la información del pokemon individual*/
  let pokemonInfo = document.createElement("div");
  pokemonInfo.setAttribute("class", "pokeInfo");

  /*Número y Nombre */
  let tituloImg = document.createElement("h4");
  let namePokemon = dataPokemon.name;
  let initialName = namePokemon.charAt(0).toUpperCase();
  let restName = namePokemon.slice(1);
  let resultName = initialName + restName;
  tituloImg.innerHTML = dataPokemon.num + " " + resultName;
  pokemonInfo.appendChild(tituloImg);

  /*Huevos*/
  let egg = document.createElement("p");
  let eggPokemon = dataPokemon.egg;
  egg.innerHTML = (`<strong>Egg:</strong> ${eggPokemon}`);
  pokemonInfo.appendChild(egg);

  /*Special Attack*/
  let tituloUl = document.createElement("p");
  pokemonInfo.appendChild(tituloUl);
  tituloUl.innerHTML = "<strong>Special Attack:</strong>";
  let info = document.createElement("p");
  for (let i = 0; i < dataPokemon["special-attack"].length; i++) {
    let attack = dataPokemon["special-attack"][i].name + " ";
    let text = document.createTextNode(`${attack}`);
    info.appendChild(text);
  }
  pokemonInfo.appendChild(info);
  mostrarPokemon.appendChild(pokemonInfo);

};
//-------------------------Mostrar Pokemon en pantalla de inicio--------------------------------

filteredData.forEach(pokemonActual => {
  createPokemonTypes(pokemonActual);

});
//--------------------------------Creación de lista Type pokémon--------------------------------------
//Creacion del selector
let selectorType = document.getElementById('selectorType')
let createSelectType = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorType.appendChild(createSelectType);
const firstOption = document.createElement("option");
firstOption.text = "Todos los Pokemon";
createSelectType.appendChild(firstOption);

//Agrega cada tipo como opcion del selector
let pokemonTypes = getPokemonTypes(filteredData) //Agregando nuestros "Options" a nuestro "Select"
pokemonTypes.forEach(types => { //Otro forEach a los tipos de pokemon para iterar la lista, despues crea el elemento
    let type = document.createElement("option");
    type.text = types;
    createSelectType.appendChild(type);
  })
  //Aqui el evento sobre que sucede cuando presionas las opciones del select
document.getElementById("selectorType").addEventListener("change", (event) => {
  if (event.target.value == "Todos los Pokemon") { //al presionar esta opcion se recarga la pagina
    document.getElementById("containerPokemon").innerHTML = "";
    fullData.forEach((pokemon) => {
      createPokemonTypes(pokemon);
    });
    //location.reload()
  } else { //muestra los tipos de pokemon
    filteredData = filterTypes(event.target.value, fullData);
    document.getElementById("containerPokemon").innerHTML = "";

    filteredData.forEach(pokemonActual => {
      createPokemonTypes(pokemonActual);
    });
  }

})

//--------------------------------------Creación de Ordenar pokémon por generación---------------------------------------------------------
let selectorRegion = document.getElementById("selectorRegion")
let createSelectRegion = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorRegion.appendChild(createSelectRegion);

let pokemonRegion = getPokemonRegion(filteredData)
  //Agregando nuestros "Options" a nuestro "Select"
pokemonRegion.forEach(regionActual => {
  let region = document.createElement("option");
  region.text = regionActual;
  createSelectRegion.appendChild(region);
})
document.getElementById("selectorRegion").addEventListener("change", (event) => {
  filteredData = filterRegion(event.target.value, fullData);
  document.getElementById("containerPokemon").innerHTML = "";

  filteredData.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);
  });

})

//---------------------Ordenar Ascendente-Descendente-------------------
//Creacion de selector de orden
let selectorSort = document.getElementById("selectorSort")
let createSelectSort = document.createElement('select'); //Creando el Select que irá dentro del Div "productos"
selectorSort.appendChild(createSelectSort);
//Creacion de opcion por numero ascendente y descendente
const sortAscendingNum = document.createElement("option");
sortAscendingNum.text = "0 a 251";
createSelectSort.appendChild(sortAscendingNum);
const sortDescendingNum = document.createElement("option");
sortDescendingNum.text = "251 a 0";
createSelectSort.appendChild(sortDescendingNum);
//Creacion de opciones ascendente y descedente por nombre
const sortAscendingName = document.createElement("option");
sortAscendingName.text = "Nombre ascendente";
createSelectSort.appendChild(sortAscendingName);
const sortDescendingName = document.createElement("option");
sortDescendingName.text = "Nombre descendente";
createSelectSort.appendChild(sortDescendingName);
//se agrega el evento a las opciones de sort
document.getElementById("selectorSort").addEventListener("change", (event) => {
  const userOption = event.target.value;
  filteredData = sortData(filteredData, userOption);
  document.getElementById("containerPokemon").innerHTML = "";
  filteredData.forEach(pokemonActual => {
    createPokemonTypes(pokemonActual);
  });
})

//-------------------eventlistener del boton inicio----------------
/*document.getElementById("selectorType").addEventListener("change", (event) => {
    if (event.target.value == "Todos los Pokemon") { //al presionar esta opcion se recarga la pagina
      document.getElementById("containerPokemon").innerHTML = "";
      fullData.forEach((pokemon) => {
        createPokemonTypes(pokemon);
      });*/