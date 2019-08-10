
// TennisApp
// - getScore(player) //A,B
// - echo() -> return score sentense
//Example:
// 0-0 "LOVE-LOVE"
// 15-0 "Fifteen-LOVE"

//TDD (Test-Driven Development)
class TennisApp {//<-- JS V6
    constructor(){
        this.scoreA = 0
        this.scoreB = 0
    }
    echo(){
        if(this.scoreA > 0 && this.scoreB === 0)
            if(this.scoreA === 15 && this.scoreB === 0)
                return 'Fifteen-LOVE'
            else if(this.scoreA === 30 && this.scoreB === 0)
                return 'Thirty-LOVE'
            else if(this.scoreA === 40 && this.scoreB === 0)
                return 'Forty-LOVE'
            else if(this.scoreA > 40 && this.scoreB === 0)
                return 'PlayerA Win'
        else if(this.scoreB > 0 && this.scoreA === 0)
            if(this.scoreB === 15 && this.scoreA === 0)
                return 'LOVE-Fifteen'
            else if(this.scoreB === 30 && this.scoreA === 0)
                return 'LOVE-Thirty'
            else if(this.scoreB === 40 && this.scoreA === 0)
                return 'LOVE-Forty'
            else if(this.scoreB > 40 && this.scoreA === 0)
                return 'PlayerB Win'
        return 'LOVE - LOVE'
    }
    getScore(player){
        if(player === 'A')
            if(this.scoreA === 30)
                this.scoreA +=10
            else
                this.scoreA +=15
        else if(player === 'B')
            if(this.scoreB === 30)
                 this.scoreB +=10
            else
                this.scoreB +=15
    }
}

describe('TennisApp',()=>{
    it('should return "LOVE-LOVE" when call echo() at game start',() =>{
        //Arrange
        const app = new TennisApp()

        //Act
        let result = app.echo()
        
        //Assert
        expect(result).toBe('LOVE - LOVE')
        
    })
    it('should echo "Fifteen-LOVE" when playerA get first score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('A')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('Fifteen-LOVE')
    })
    it('should echo "Thirty-LOVE" when playerA get double score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('Thirty-LOVE')
    })
    it('should echo "Forty-LOVE" when playerA get Tripple score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')
        app.getScore('A')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('Forty-LOVE')
    })
    it('should echo "PlayerA Win" when playerA get Quadruple score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')
        app.getScore('A')
        app.getScore('A')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerA Win')
    })
    
    it('should echo "LOVE-Fifteen" when playerA get first score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('B')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('LOVE-Fifteen')
    })
    it('should echo "LOVE-Thirty" when playerA get first score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('B')
        app.getScore('B')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('LOVE-Thirty')
    })

    it('should echo "LOVE-Forty" when playerA get first score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('B')
        app.getScore('B')
        app.getScore('B')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('LOVE-Forty')
    })

    it('should echo "PlayerB Win" when playerB get Quadruple score',() =>{
        //Arrange
        const app = new TennisApp()
        app.getScore('B')
        app.getScore('B')
        app.getScore('B')
        app.getScore('B')
        //Act
        
        let result = app.echo()
        //Assert
        expect(result).toBe('PlayerB Win')
    })


})
