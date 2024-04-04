import capitalize from './capitalize'
import reverse from './reverse'
import {add,less,divide,multiply} from './calculator'
import cipher from './caesarCipher ' 

describe('capitalize', ()=>{
    test('convertir la primera letra en mayuscula',()=>{
        expect(capitalize("perrito")).toBe("Perrito")
    });
    test('error arrojar', () => {
        expect(capitalize("")).toBe("ERROR")
    })
})

describe('reverseString', ()=>{
    test('revertir palabra', ()=>{
        expect(reverse("gato")).toBe("otag")
    })
})

describe('add', ()=> {
    test('sumar dos numeros', ()=>{
        expect(add(2,3)).toBe(5)
    });
    test('restar dos numeros', ()=>{
        expect(less(10,4)).toBe(6)
    });
    test('dividir 2 numeros', ()=> {
        expect(divide(18,3)).toBe(6)
    });
    test('muliplicar 2 numeros', ()=>{
        expect(multiply(4,6)).toBe(24)
    })
})

describe('caesarCipher', ()=> {
    test('prueba simple', ()=> {
        expect(cipher("gato", 2)).toBe("icvq")
    });
    test('de "z" hacia "a", letras', ()=> {
        expect(cipher("zanco", 2)).toBe("bcoeq")
    });
    test('shiftear 0 posiciones', ()=> {
        expect(cipher("perro", 0)).toBe("perro")
    });
    test('ignorar puntuaciones y signos', ()=> {
        expect(cipher("p.a3l+o", 2)).toBe("r.c3n+q")
    });
    test('ignorar puntuaciones y signos', ()=> {
        expect(cipher("acto", 2)).toBe("cevq")
    });
})