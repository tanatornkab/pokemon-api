const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World'))

class Pokemon{
    constructor(name,type){
      this.name =name 
      this.type=  type
    }

    echo(){
        console.log(`Type of ${this.name} is ${this.type}`)
    }
}

let pokemons= []


app.get('/pokemon', (req, res) => res.send(pokemons))

app.post('/pokemon', (req, res) => {

    if(req.body.name=== null||
        req.body.name ===''||
        req.body.type ===null||
        req.body.type ===''

        ){
            res.sendStatus(400)

    }

    let tmp = getObject(req.body.name,req.body.type)
    pokemons.push(tmp)
    console.log(tmp)
    //res.send('Still work in progreen...')
    res.sendStatus(201)
})
function generateID (id){
    let newID = id+1
    return newID
}
function getObject(name,type){
    let tmp = new Pokemon(name,type)
    tmp.id  =  generateID (pokemons.length)
    return tmp
}



app.listen(port, () => console.log(`Pokemon API listening on port ${port}!`))