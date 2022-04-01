
    let input = document.querySelector('#p-name')
    //let lastLenght = input.value.length
    input.addEventListener('keydown', (e)=>{
        
        if (e.code == 'Enter') {
            /* let filtered = ads.filter(ad =>ad.name.toLowerCase().includes(input.value.toLowerCase()))  */           
           const pokemonName = input.value
        
        
        input.value = ''
    




fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response)=>response.json())
.then((data)=>{
    console.log(data);

    //img
    const pokeImg = document.querySelector('#pokemon-img').src = `${data.sprites.front_default}`
    console.log(data.sprites.front_default);
    

    //number
    console.log(data.id);
    const pokeNum = document.querySelector('#poke-num').innerHTML = `${data.id}`
    
    //type
    console.log(data.types[0].type.name);
     
    const pokeType1 = document.querySelector('#poke-type1').innerHTML = `${data.types[0].type.name}`

    
    //name
    console.log(data.name); 
    const pokeName = document.querySelector('#poke-name').innerHTML = `${data.name}`

    //hp
    console.log(data.stats [0].base_stat);
    const pokeHp = document.querySelector('#poke-hp').innerHTML = `${data.stats [0].base_stat}`

    //attack
    console.log(data.stats [1].base_stat);
    const pokeAttack = document.querySelector('#poke-attack').innerHTML = `${data.stats [1].base_stat}`

    //defense
    console.log(data.stats [2].base_stat);
    const pokeDefense = document.querySelector('#poke-defense').innerHTML = `${data.stats [2].base_stat}`
    //special-attack
    console.log(data.stats [3].base_stat);
    const pokeSpecialAttack = document.querySelector('#poke-special-attack').innerHTML = `${data.stats [3].base_stat}`
    //special-defense
    console.log(data.stats [4].base_stat);
    const pokeSpecialDefense = document.querySelector('#poke-special-defense').innerHTML = `${data.stats [4].base_stat}`
    //speed
    console.log(data.stats [5].base_stat);
    const pokeSpeed = document.querySelector('#poke-speed').innerHTML = `${data.stats [5].base_stat}`

    //weight
    console.log(data.weight);
    const pokeWeight = document.querySelector('#poke-weight').innerHTML = `${data.weight}`
})
}
})