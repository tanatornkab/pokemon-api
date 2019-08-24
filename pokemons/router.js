var express = require('express')
const Request = require('request')
const pokemons = require('./pokemon')
var router = express.Router()

router.use(express.json())

router.get('/pokemons', (req, res) => res.send(pokemons.getPokemon))


router.get('/pokemon/:id', (req, res) => {
    // if( !checkError(req.params.id)){
    //         res.status(400).send({error : "Insuffucuent paramiters"})
    //         return
    // }

   let id = req.params.id
   let p = pokemons.getPokemon(id)

//    if(p===undefined||p===null){
//     res.status(400).send({error : "The Pokemon could not found"})
//     return
// }
// console.log("test case 1"+p)
   res.send(p)
   
})

router.post('/pokemons', (req, res) => {
    
    if( !checkError(req.body.name)||
        !checkError(req.body.type)
            )

        {
            res.status(400).send({error : "Insuffucuent paramiters: name and type are required parameter"})
            return
    }

    let tmp = getObject(req.body.name,req.body.type)
    pokemons.push(tmp)
    console.log(tmp)
    //res.send('Still work in progreen...')
    res.sendStatus(201)
})

router.put('/pokemon/:id', (req, res) =>{
    
    if(!checkError(req.params.type2)){
        res.status(400).send({error : "Insuffucuent paramiters:type2 is required parameter"})
        return
    }
    
    if(!checkError(req.params.id)){
        res.status(400).send({error : "Insuffucuent paramiters:id is required parameter"})
        return
    }
    let id = req.params.id
    let p = pokemons[id-1]
    if(p===undefined){
        res.status(400).send({error : "Cannot update pokemon:Pokemon is not found"})
        return
    }

    p.type2=req.params.type2
    pokemons[id-1]=p
    console.log(p)
    res.sendStatus(200)
})

router.delete('/pokemon/:id',(req,res)=>{
    
    let id = req.params.id
    if(!checkError(req.params.id)){
        res.status(400).send({error : "Insuffucuent paramiters:type2 is required parameter"})
        return
    }
    
    let p = pokemons[id-1]
    if(p===undefined){
        res.status(400).send({error : "Cannot update pokemon:Pokemon is not found"})
        return
    }
    delete pokemons[id -1]
    res.sendStatus(204)


})


module.exports = router