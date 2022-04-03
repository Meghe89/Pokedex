const searchIcon = document.querySelector('#search-icon');

const input = document.querySelector("#p-name");

//let lastLenght = input.value.length
input.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    /* let filtered = ads.filter(ad =>ad.name.toLowerCase().includes(input.value.toLowerCase()))  */
    const pokemonName = input.value.toLowerCase();

    input.value = "";

    

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {

        const noData = document.querySelector("#no-data");
        const dataContainer = document.querySelector("#data-container");
        

        if (data) {
          dataContainer.classList.remove('d-none')
          noData.classList.add('d-none')
        }

        //img
        const pokeImg = (document.querySelector(
          "#pokemon-img"
        ).src = `${data.sprites.front_default}`);

        //number

        const pokeNum = (document.querySelector(
          "#poke-num"
        ).innerHTML = `${data.id}`);

        //type

        const pokeType1 = (document.querySelector(
          "#poke-type1"
        ).innerHTML = `${data.types[0].type.name}` );

        //name

        const pokeName = (document.querySelector(
          "#poke-name"
        ).innerHTML = `${data.name}`);

        //hp

        const pokeHp = (document.querySelector(
          "#poke-hp"
        ).innerHTML = `${data.stats[0].base_stat}`);

        //attack

        const pokeAttack = (document.querySelector(
          "#poke-attack"
        ).innerHTML = `${data.stats[1].base_stat}`);

        //defense

        const pokeDefense = (document.querySelector(
          "#poke-defense"
        ).innerHTML = `${data.stats[2].base_stat}`);
        //special-attack

        const pokeSpecialAttack = (document.querySelector(
          "#poke-special-attack"
        ).innerHTML = `${data.stats[3].base_stat}`);
        //special-defense

        const pokeSpecialDefense = (document.querySelector(
          "#poke-special-defense"
        ).innerHTML = `${data.stats[4].base_stat}`);
        //speed

        const pokeSpeed = (document.querySelector(
          "#poke-speed"
        ).innerHTML = `${data.stats[5].base_stat}`);

        //weight

        const pokeWeight = (document.querySelector(
          "#poke-weight"
        ).innerHTML = `${data.weight}`);
      });
  }
});
