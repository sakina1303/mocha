const calci = require('../src/calci')
const chai = require('chai')
const expect = chai.expect
const calc= new calci()

describe('calcitest', ()=>{

    before(()=> console.log('before all'))
    beforeEach(()=> console.log('runs b4 each it block'))
    after(()=> console.log('runs at last'))
    afterEach(()=> console.log('runs after each it block'))
    it('addtest', ()=>{
        expect(calc.add(2,3)).to.equal(5)
    })
    it('addtest2',()=>{
        expect(calc.add(1,2)).to.equal(3)
    })
})