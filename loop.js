/*
var idx = [
    1,2,3,4,5
]

var various = [
    1,
    'a',
    { name : 'ball'}
]

console.log(various.length)
console.log(various[0])
console.log(various[various.length-1])

console.log(idx.indexOf(3)) // ans-> 2
console.log(idx.indexOf(6)) // ans-> -1 //-1 คือหาไม่เจอ
*/
/*
var idx = ['Bulbasaur', 'Charmander', 'Squirtle', 'Butterfree', 'Pikachu'];
//--------------------------//
idx.forEach(function(element) {
  console.log(element);
});
//-----------------------//

function popo(i){
  console.log(`${i} i need you...`);
}

idx.forEach(popo)

*/

//-----------------------------//
//-----------------------------//
//-----------------------------//

class Pokemon{
    constructor(name,type){
        this.name = name
        this.type = type
    }

    echo(){
        console.log(`Type of ${this.name} is ${this.type}`)
    }
}

//-----------------------------//
//       1        //
/*

pikachu = new Pokemon('Pikachu','Electric')
paras = new Pokemon('Paras','Bug')
metapod = new Pokemon('Metapod','Bug')

var Pokemons = [pikachu, paras]

Pokemons.forEach(function(i){
    i.echo()
})

*/
//-----------------------------//
//       2        //
var Pokemon1 = []

pikachu = new Pokemon('Pikachu','Electric')
paras = new Pokemon('Paras','Bug')
metapod = new Pokemon('Metapod','Bug')

Pokemon1.push(pikachu)
Pokemon1.push(paras)
Pokemon1.push(metapod)

Pokemon1.forEach(function(Pokemon){
    Pokemon.echo()
})

//-----------------------------//
//-----------------------------//
//-----------------------------//