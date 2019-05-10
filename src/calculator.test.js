import calculator from './calculator'

describe("Running Calculator",()=>{
    it('should return 0',() => {
        expect(calculator()).toBe(0)
    })
})