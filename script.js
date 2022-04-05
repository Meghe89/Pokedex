const searchIcon = document.querySelector('#search-icon');
const input = document.querySelector("#p-name");
const noData = document.querySelector("#no-data");
const dataContainer = document.querySelector("#data-container");


input.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    const pokemonName = input.value.toLowerCase();
    input.value = "";  

    pokemonData(pokemonName)
  }
});

searchIcon.addEventListener('click',()=>{
  const pokemonName = input.value.toLowerCase()
  input.value = "";
    
 pokemonData(pokemonName)
})


function pokemonData(pokemonName){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {

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
      const type = `${data.types[0].type.name}`
      const pokeType1 = (document.querySelector("#poke-type1"));

      pokeType1.innerHTML = type ;
        i = document.createElement('i')

        let solid = 'fa-solid'
      if (type == 'electric') {
        i.classList.add(solid, 'fa-bolt-lightning', 'yellow');  
      }

      if (type == 'grass') {        
        i.classList.add(solid, 'fa-leaf', 'green');
       }

      if (type == 'fire') {
       i.classList.add(solid, 'fa-fire-flame-curved', 'red');
      }

      if (type == 'water') {
        i.classList.add(solid, 'fa-droplet', 'blue');
      }

      if (type == 'bug') {                
        i.classList.add(solid, 'fa-bug', 'green');           
      }

      if (type == 'poison') {        
        i.classList.add(solid, 'fa-skull-crossbones', 'purple');       
      }

      if (type == 'ground') {          
        i.classList.add(solid, 'fa-circle', 'brown');
      }

      if (type == 'fairy') {          
        i.classList.add(solid, 'fa-wand-sparkles', 'light-blue');
      }

      if (type == 'fighting') {          
        i.classList.add(solid, 'fa-hand-fist');
      }

      if (type == 'psychic') {          
        i.classList.add(solid, 'fa-brain', 'psychic');
      }

      if (type == 'rock') {          
        i.classList.add(solid, 'fa-circle', 'rock');
      }

      if (type == 'ghost') {          
        i.classList.add(solid, 'fa-ghost', 'ghost');
      }

      if (type == 'ice') {          
        i.classList.add(solid, 'fa-snowflake', 'snowflake');
      }

      if (type == 'dragon') {          
        i.classList.add(solid, 'fa-dragon');
      }

      if(type == 'flying'){
        i.classList.add(solid, 'fa-feather-pointed')
      }

      if(type == 'steel'){
        i.classList.add(solid, 'fa-shield', 'gray')
      }

      pokeType1.appendChild(i)

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
    })
    .catch(()=>{
      dataContainer.classList.add('d-none')
      noData.classList.remove('d-none')      
      let notFound = document.querySelector('#not-found')
      notFound.innerHTML = 'Pokemon not Found!'         
    });
}