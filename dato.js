import { data } from "./poke.js";

const pokedexContainer = document.getElementById("pokedex");

for (let i = 0; i < data.length; i++) {
    const pokemon = data[i];

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonImage = document.createElement("img");
    pokemonImage.classList.add("pokemon-image");
    pokemonImage.src = `pokemones/${pokemon.thumbnail}`;
    pokemonImage.alt = pokemon.name;

    const pokemonName = document.createElement("p");
    pokemonName.textContent = pokemon.name;

    const pokemonId = document.createElement("p");
    pokemonId.textContent = `id: ${pokemon.id}`;

    const pokemonTypes = document.createElement("p");
    pokemonTypes.textContent = `Type: ${pokemon.type.join(", ")}`;

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);
    pokemonCard.appendChild(pokemonId);
    pokemonCard.appendChild(pokemonTypes);

    pokedexContainer.appendChild(pokemonCard);
}
