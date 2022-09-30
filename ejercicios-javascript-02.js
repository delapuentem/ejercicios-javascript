import * as validations from "./validations.js"

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const miFuncion5 = function(string){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        
        return console.log(string.split('').reverse().join(''))

    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion5('Hola mundo')


// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const miFuncion6 = function(string, word){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        if (validations.isString('word', word).result === false) throw new validations.isString('word', word).error        
        
        return console.log(string.match(/mundo/g).length)
    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion6('Hola mundo adios mundo', 'mundo')


// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const miFuncion7 = function(string){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        
        const result = string.toLowerCase() !== string.split('').reverse().join('').toLowerCase() ? console.log(`False. ${string} no es un palíndromo`): console.log(`True. ${string} es un palíndromo`)
        return result
    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion7('Salas')


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const miFuncion8 = function(string, patron){
    try{
        if (validations.isString('string', string).result === false) throw new validations.isString('string', string).error
        if (validations.isString('patron', patron).result === false) throw new validations.isString('patron', patron).error        
        
        return console.log(string.replaceAll(patron, ''))
    }
    catch(error){
        return console.error(`${error.name}: ${error.message}`)
    }
}

miFuncion8('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz')