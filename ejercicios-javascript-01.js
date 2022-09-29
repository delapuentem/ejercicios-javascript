// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
const miFuncion1 = function(string){
    try{
        if (!string){ 
            throw new Error(`No has asignado ningún valor al parámetro <string>`)
        }
        if ((typeof string) !== 'string'){
            throw new Error(`El valor debe de ser de tipo string. ${string} es tipo ${typeof string}.`)
        }
        return string.length

    }
    catch(error){
        return `${error.name}: ${error.message}`
    }
}

console.log(miFuncion1('Hola mundo'))


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const miFuncion2 = function(string, number){
    try{
        if (!string){  
            throw new Error(`No has asignado ningún valor al parámetro <string>`)
        }
        if (typeof string !== 'string'){
            throw new Error(`El valor del primer parametro debe de ser de tipo string. ${string} es tipo ${typeof string}.`)
        }        
        if (!number){  
            throw new Error(`No has asignado ningún valor al parámetro <number>`)
        }                
        if (typeof number !== 'number'){
            throw new Error(`El valor del segundo parametro debe de ser de tipo number. ${number} es tipo ${typeof number}.`)
        }
        if (string.length < number){
            throw new Error(`El valor introducido es mayor a la longitud del string`)
        }
        return string.slice(0, -number)
    }
    catch(error){
        return `${error.name}: ${error.message}`
    }
}

console.log(miFuncion2('Hola mundo', 5))


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const miFuncion3 = function(string, character){
    try{
        if (!string){  
            throw new Error(`No has asignado ningún valor al parámetro <string>`)
        }
        if (typeof string !== 'string'){
            throw new Error(`El valor del primer parametro debe de ser de tipo string. ${string} es tipo ${typeof string}.`)
        }          
        if (!character){  
            throw new Error(`No has asignado ningún valor al parámetro <character>`)
        }                   
        if (typeof character !== 'string'){
            throw new Error(`El valor del primer parametro debe de ser de tipo string. ${character} es tipo ${typeof character}.`)
        }              
        return string.split(character)
    }
    catch(error){
        return `${error.name}: ${error.message}`
    }
}

console.log(miFuncion3('Hola mundo', ' '))


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const miFuncion4 = function(string, number){
    try{
        if (!string){  
            throw new Error(`No has asignado ningún valor al parámetro <string>`)
        }
        if (typeof string !== 'string'){
            throw new Error(`El valor del primer parametro debe de ser de tipo string. ${string} es tipo ${typeof string}.`)
        }        
        if (!number){  
            throw new Error(`No has asignado ningún valor al parámetro <number>`)
        }                
        if (typeof number !== 'number'){
            throw new Error(`El valor del segundo parametro debe de ser de tipo number. ${number} es tipo ${typeof number}.`)
        }

        for(let i = 0; i < number; i = i + 1){
            console.log(string)
        }
    }   
    catch(error){
        return `${error.name}: ${error.message}`
    } 
}

miFuncion4('Hola mundo', 5)