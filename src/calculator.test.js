import calculator from './calculator'

describe("Running Calculator",()=>{
    it('Should returrn 0',() => {
        expect(calculator()).toBe(0)
    })
})