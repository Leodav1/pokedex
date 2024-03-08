import { data } from "./poke.js";


const pokedexContainer = document.getElementById("pokedex-container");

const pokemonCardsList = document.createElement("ul");
pokemonCardsList.classList.add('pokemon-cards-list');

{/* <div class="logo-container">
     <img src="la url del logo" class="pokemon-logo-img" />
     <img src="la url de la pokebola" class="pokeball-img" />
</div> */}

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container")

const pokemonLogoImg = document.createElement("img");
pokemonLogoImg.classList.add("pokemon-logo-img");
pokemonLogoImg.src = "pokemones/pokemon_logo.png";
pokemonLogoImg.alt = "pokemon logo img";

const pokeballImg = document.createElement("img");
pokeballImg.classList.add("pokeball-img");
pokeballImg.src = "pokemones/pokeball.png";
pokeballImg.alt = "pokeball img";

logoContainer.appendChild(pokemonLogoImg)
logoContainer.appendChild(pokeballImg)

for (let i = 0; i < data.length; i++) {
    const pokemonData = data[i];

    const pokemonCard = document.createElement("li");
    pokemonCard.classList.add("pokemon-card");

    const pokemonCardInfo = document.createElement("div");
    pokemonCardInfo.classList.add("pokemon-card-info");

    const pokemonImage = document.createElement("img");
    pokemonImage.classList.add("pokemon-image");
    pokemonImage.src = `pokemones/${pokemonData.thumbnail}`;
    pokemonImage.alt = pokemonData.name;

    const pokemonName = document.createElement("h2");
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

    pokemonCardInfo.appendChild(pokemonId);
    pokemonCardInfo.appendChild(pokemonName);
    pokemonCardInfo.appendChild(pokemonTypesList);

    pokemonCard.appendChild(pokemonCardInfo);

    pokemonCardsList.appendChild(pokemonCard);
}


pokedexContainer.appendChild(logoContainer)
pokedexContainer.appendChild(pokemonCardsList)