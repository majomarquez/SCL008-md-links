
const link= require('./md-Links');


/*1) Validaciones de las funciones que chequean createAccount()*/
// describe("processMarkdown",()=>{
//     it('deberia retornar false, si',()=>{
//         expect(processMarkdown("")).toBe(false);
//     })
// })
/*1) Validaciones de las funciones link()*/
describe("link",()=>{
    it('deberia retornar true, si',()=>{
        expect(link("https://github.com/jsdom/jsdom")).resolve.toBe(true);
    })
})