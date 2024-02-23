let boton=document.getElementById('boton')
//var informacion=document.getElementById('informacion')
function MostrarMacho(){
    let nombre = document.getElementById('pokemonNombre').value
    var pokeapi = `https://pokeapi.co/api/v2/pokemon/`;
    pokeapi = pokeapi + nombre
    fetch (pokeapi)
    .then (
       response => response.json()
    )

    .then( 
        data =>{ 
            console.log(data);
            var imagen_macho = data.sprites.front_default            
            imagenPokemon.innerHTML = `<img src="`+imagen_macho+`" alt="">
            <button id="botonH" onclick="shinyM()">shiny</button>`
            
        } 
    )
   }


   function Mostrarhembra(){
    let nombre = document.getElementById('pokemonNombre').value
    var pokeapi = `https://pokeapi.co/api/v2/pokemon/`;
    pokeapi = pokeapi + nombre
    fetch (pokeapi)
    .then (
       response => response.json()
    )

    .then( 
        data =>{ 
            console.log(data);
            var imagen_hembra = data.sprites.front_female           
            imagenPokemon.innerHTML = `<img src="`+imagen_hembra+`" alt="">
            <button id="botonH" onclick="shinyF()">shiny</button>`
        } 
    )
   }

   function shinyM(){
    let nombre = document.getElementById('pokemonNombre').value
    var pokeapi = `https://pokeapi.co/api/v2/pokemon/`;
    pokeapi = pokeapi + nombre
    fetch (pokeapi)
    .then (
       response => response.json()
    )

    .then( 
        data =>{ 
            console.log(data);
            var imagenMachoShiny = data.sprites.front_shiny           
            imagenPokemon.innerHTML = `<img src="`+imagenMachoShiny+`" alt="">
            <button id="botonH" onclick="MostrarMacho()">Normal</button>`
            
        } 
    )
   }

   function shinyF(){
    let nombre = document.getElementById('pokemonNombre').value
    var pokeapi = `https://pokeapi.co/api/v2/pokemon/`;
    pokeapi = pokeapi + nombre
    fetch (pokeapi)
    .then (
       response => response.json()
    )

    .then( 
        data =>{ 
            console.log(data);
            var imagenHembraShiny = data.sprites.front_shiny_female          
            imagenPokemon.innerHTML = `<img src="`+imagenHembraShiny+`" alt="">
            <button id="botonH" onclick="Mostrarhembra()">Normal</button>`
            
        } 
    )
   }



function ConsultarApi(){
    let nombre = document.getElementById('pokemonNombre').value
    var pokeapi = `https://pokeapi.co/api/v2/pokemon/`;
    pokeapi = pokeapi + nombre
    fetch (pokeapi)
    .then (
       response => response.json()
    )

    .then( 
        data =>{ 

         console.log(data);
         var imagen = data.sprites.front_default
         var imagen_shiny = data.sprites.front_shiny
         var name= data.name
         var type =data.types[0].type.name
         var type2=" "
         for (const element of data.types) {
            console.log(element.type.name);
            
             type2 = type2 +" "+element.type.name
    
          }

    


//<img src="`+imagen_shiny+`" alt="">



 informacion.innerHTML = `
 <div id=`+type+` class=cuadro>
    <div id="imagenPokemon" >
        <img  src="`+imagen+`" alt=""> 
        <button id="botonH" onclick="shinyM()">shiny</button>
    </div>
    <div class= "datos">
        <p> Nombre: `+name+`</p>
        <p class="`+type+`"> tipo: `+type2+`</p>
        <button id="botonM" onclick="MostrarMacho()">Macho</button>
        <button id="botonH" onclick="Mostrarhembra()">hembra</button>
    </div>
 </div>`;

 

})

    

.catch (
    informacion.innerHTML=`<p>No existe</p>`
)
}

