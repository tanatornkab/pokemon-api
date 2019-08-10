const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send(Pokemon1))

class Pokemon{
    constructor(name,type){
        this.name = name
        this.type = type
    }

    echo(){
        console.log(`Type of ${this.name} is ${this.type}`)
    }
}

var Pokemon1 = []

pikachu = new Pokemon('Pikachu','Electric')
paras = new Pokemon('Paras','Bug')
metapod = new Pokemon('Metapod','Bug')

Pokemon1.push(pikachu)
Pokemon1.push(paras)
Pokemon1.push(metapod)

// Pokemon1.forEach(function(Pokemon){
//     Pokemon.echo()
// })

let Pokemon2 = [
    {name:'Pikachu',type:'Electric'},
    {name:'Paras',type:'Bug'}
]

app.get('/pokemon', (req, res) => res.send(Pokemon2))

// POST /pokemons -> addpokemon to list

//req -> request,res -> response
app.post('/pokemon', (req, res) => {
    Pokemon2.push(req.body)
    console.log(req.body)
    // res.send('Still work in progreen...')
    res.sendStatus(201)
})

app.listen(port, () => console.log(`Pokemon API listening on port ${port}!`))