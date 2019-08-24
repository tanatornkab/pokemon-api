const request = require('supertest') 
const chai = require('chai')
const app = require('../app')
chai.should()

describe('Pokemon API',() =>{
    describe('GET /',()=>{
        it('should return 200 ok with "Hello world"',(done) =>{
            request(app).get('/')
            .expect(200)
            .end((err,res) => {
                res.body.should.deep.equal({ message:'Hello' })
                done()
            })
        })
    })

    describe('GET /pokemon/:id',()=>{
        it('should return 200 ok with Object pokemon ID',(done) =>{
            request(app).get('/pokemon/1')
            .expect(200)
            .end((err,res) => {
                 res.body.should.to.be.a('object')
                 res.body.should.have.property('id')
                 res.body.should.have.property('name')
                 res.body.should.have.property('type')
                done()
            })
         })

         it('should return 400 Bad request',(done) =>{
            request(app).get('/pokemon/55')
            .expect(400)
            .end((err,res) => {
                res.body.error.should.equal("The Pokemon could not found")
                //  res.body.should.deep.equal({ error:'The Pokemon could not found' })
                done()
            })
         })
    })

    describe('POST /pokemons',()=>{
       
        it('should return 201 Create and have new pokemon',(done) =>{
            request(app).post('/pokemons')
            .send({ name:"Unknown",type:"Unknown"})
            .set('Accept','application/json')
            .expect(201,done)
        })

        it('should return 400 Bad Request when missed required field',(done) =>{
            request(app).post('/pokemons')
            .expect(400)
            .end((err,res) => {
                res.body.should.deep.equal({error : "Insuffucuent paramiters: name and type are required parameter"})
                 
                done()
            })
        })
    })

    describe('PUT /pokemon/:id',()=>{
       
        it('should return 201 Create and have new pokemon',(done) =>{
            request(app).post('/pokemon/4')
            .send({ type2:"Unkonown"})
            .set('Accept','application/json')
            .expect(200)
            .end((err,res) => {
                done()
            })
            
        })

    it('should return 400 Bad Request when missed required field',(done) =>{
        request(app).put('/pokemon/99')
        .expect(400)
        .end((err,res) => {
            res.body.should.deep.equal({error : "Insuffucuent paramiters:type2 is required parameter"})
   
             
            done()
        })
    })
    })

})


describe('Integration Test',()=>{
    it('GET /pokemon should return list of pokemon',(done)=>{
        request("http://localhost:3000").get('/pokemons')
        .expect(200)
        .end((err,res) => {
            res.body.should.be.a(array)
            done()
        })
    })
})