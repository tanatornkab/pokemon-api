class Pokemon{
    constructor(name,type,type2){
      this.name =name 
      this.type=  type
      this.type2=  type2
    }
 
}
let pokemons = []
pokemons.push(new Pokemon(getObject('Pikachu','Electric','')))
pokemons.push(new Pokemon(getObject('Paras','Bug','')))

function generateID (id){
    let newID = id+1
    return newID
}

function getObject(name,type){
    let tmp = new Pokemon(name,type)
    tmp.id  =  generateID (pokemons.length)
    return tmp
}
function checkError(v){
   return  v!== null&&    v !==undefined&&    v !==''
}
function getpokemonbyID(id){
    return pokemons[id -1 ] !==undefined && pokemons[id-1] !==null

}

function getPokemon (id){
    return pokemons[id-1]
}

module.exports.getPokemon=getPokemon

// module.exports.pokemons=pokemons
// module.exports.checkError=checkError;