import * as validations from "./validations.js"

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const miFuncion1 = function(string){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        
        return console.log(string.length)

    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion1('Hola mundo')


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const miFuncion2 = function(string, number){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        if (validations.isNumber('number', number).result === false) throw new validations.isNumber('number', number).error
        if (string.length < number) throw new Error(`El valor introducido es mayor a la longitud del string`)

        return console.log(string.slice(0, -number))
    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion2('Hola mundo', 5)


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const miFuncion3 = function(string, character){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error  
        if (validations.isString('character', character).result === false) throw new validations.isString('character', character).error         
        return console.log(string.split(character))
    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion3('Hola mundo', ' ')


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const miFuncion4 = function(string, number){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        if (validations.isNumber('number', number).result === false) throw new validations.isNumber('number', number).error

        for(let i = 0; i < number; i = i + 1){
            console.log(string)
        }
    }   
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    } 
}

miFuncion4('Hola mundo', 5)