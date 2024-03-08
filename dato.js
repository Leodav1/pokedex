import { data } from "./poke.js";

const pokedexContainer = document.getElementById("pokedex");

for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const image = document.createElement("img");
    image.classList.add("pokemones");
    image.src = `pokemones/${pokemon.thumbnail}`;
    image.alt = pokemon.name;

    const name = document.createElement("p");
    name.textContent = pokemon.name;

    const id = document.createElement("p");
    id.textContent = `id: ${pokemon.id}`;

    const types = document.createElement("p");
    types.textContent = `Type: ${pokemon.type.join(", ")}`;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(types);

    pokedexContainer.appendChild(card);
}
console.log(data)