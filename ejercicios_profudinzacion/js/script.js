"use strict";

const data = [{
        id: 1,
        name: "Bulbasaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png",
    },
    {
        id: 2,
        name: "Ivysaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png",
    },
    {
        id: 3,
        name: "Venusaur",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png",
    }
]

const data1 = [{
        id: 7,
        name: "Squirtle",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/007.png",
    },
    {
        id: 8,
        name: "Wartortle",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/008.png",
    },
    {
        id: 9,
        name: "Blastoise",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/009.png",
    }
]

/* Enunciado
1) Utilice el array data para completar la página de pokemones,
como ejemplo se puede guiar por el siguiente "article", deberá
utilizar un bucle para recorrer data y armar el HTML que introducirá
en "section".

      <article>
        <img
          src="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
          class="icon-type"
          alt="icon type"
        />
        <p>
          Pokemon algo1
        </p>
      </article>

2) Luego de que haya podido generar el contenido dinamicamente, agregar
    a todas las tarjetas de pokemons la propiedades "planta"
    al pasar el mouse por encima (mouseover).

*/

/* Comienza a escribir su código aquí */

let mapClases = new Map();
mapClases.set("clase", "pedro");
mapClases.set("apellidos", "gomez");

// const contenedor = document.querySelector("section"); // Referencia a la sección donde quiero agregar elementos

crearElementosHTML(data);
crearElementosHTML(data1);

function crearElementosHTML(array) {
    const contenedor = document.querySelector("section"); // Referencia a la sección donde quiero agregar elementos


    array.forEach(miPokemon => {
        const article = document.createElement("article"); // Creo el elemento article de HTML
        // article.classList.add(tipoPokemon.estiloClase); // Asigno la clase a ese articulo
        const div = document.createElement("div");

        // Creo la imagen
        const imagen = document.createElement("img");
        imagen.src = miPokemon.thumbnail;
        imagen.classList.add("icon-type");
        imagen.alt = "icon type";

        // Ahora creo el <p>
        const p = document.createElement("p");
        p.textContent = miPokemon.name

        // Luego agrego los elementos al artículo
        article.appendChild(imagen);
        article.appendChild(p);

        div.appendChild(article); // Agrega el article dentro del div

        contenedor.appendChild(div);

        article.addEventListener("mouseover", function() {
            if (miPokemon.id <= 3) {
                article.classList.add("planta")
            } else {
                article.classList.add("agua")
            }
        })

        article.addEventListener("mouseout", function() {
            if (miPokemon.id <= 3) {
                article.classList.remove("planta")
            } else {
                article.classList.remove("agua")
            }
        })
    });
}