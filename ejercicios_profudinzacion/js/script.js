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

const data2 = [{
        id: 7,
        name: "Squirtle",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/004.png",
    },
    {
        id: 8,
        name: "Wartortle",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/005.png",
    },
    {
        id: 9,
        name: "Blastoise",
        thumbnail: "https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/006.png",
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

let accumulator = ""

viewPokemons(data)
viewPokemons(data1)
viewPokemons(data2)

function viewPokemons(params) {
    const contenedor = document.querySelector("section");

    params.forEach(p => {
        accumulator += `
        <article>
        <img
          src="${p.thumbnail}"
          class="icon-type"
          alt="icon type"
        />
        <p>
          ${p.name}
        </p>
      </article>
      `
        contenedor.innerHTML = accumulator;
    })

    addClass()

}

function addClass() {
    const art = document.querySelectorAll("article");

    art.forEach((art, index) => {
        if (index <= 2) {
            art.addEventListener("mouseover", function() {
                art.classList.add("planta");
            });
            art.addEventListener("mouseout", function() {
                art.classList.remove("planta");
            });
        } else if (index >= 3 && index < 6) {
            art.addEventListener("mouseover", function() {
                art.classList.add("agua");
            });
            art.addEventListener("mouseout", function() {
                art.classList.remove("agua");
            });
        } else {
            art.addEventListener("mouseover", function() {
                art.classList.add("fuego");
            });
            art.addEventListener("mouseout", function() {
                art.classList.remove("fuego");
            });
        }
    });
}