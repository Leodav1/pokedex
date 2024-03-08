import { data } from "./poke.js";

const pokedexContainer = document.getElementById("pokedex-container");

for (let i = 0; i < data.length; i++) {
    const pokemonData = data[i];

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const pokemonCardInfo = document.createElement("div");
    pokemonCardInfo.classList.add("pokemon-card-info");

    const pokemonImage = document.createElement("img");
    pokemonImage.classList.add("pokemon-image");
    pokemonImage.src = `pokemones/${pokemonData.thumbnail}`;
    pokemonImage.alt = pokemonData.name;

    const pokemonName = document.createElement("p");
    pokemonName.textContent = pokemonData.name;

    const pokemonId = document.createElement("p");
    pokemonId.textContent = `id: ${pokemonData.id}`;

    const pokemonTypesList = document.createElement("ul");
    pokemonTypesList.className = "pokemon-types-list";

    for (let j = 0; j < pokemonData.type.length; j++) {
        const pokemonType = pokemonData.type[j];

        const pokemonTypeItem = document.createElement("li")
        pokemonTypeItem.className=`pokemon-type-item ${pokemonType.toLowerCase()}`
        pokemonTypeItem.textContent = pokemonType;

        pokemonTypesList.appendChild(pokemonTypeItem);
    }

    pokemonCard.appendChild(pokemonImage);

    pokemonCardInfo.appendChild(pokemonName);
    pokemonCardInfo.appendChild(pokemonId);
    pokemonCardInfo.appendChild(pokemonTypesList);

    pokemonCard.appendChild(pokemonCardInfo);

    pokedexContainer.appendChild(pokemonCard);
}
