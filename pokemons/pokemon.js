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
function getcheckpokemon(id){
    return pokemons[id -1 ] !==undefined && pokemons[id-1] !==null

}

function getPokemonbyID (id){
    return pokemons[id-1]
}

function getPokemon(){
    return pokemons
}

function addData(name,type){
        
    let tmp = getObject(name,type)
 
    return
}


module.exports.getPokemon=getPokemon
module.exports.getPokemonbyID=getPokemonbyID
module.exports.checkError=checkError
module.exports.addData=addData

// module.exports.pokemons=pokemons
// module.exports.checkError=checkError;