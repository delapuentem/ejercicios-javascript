export function isString(paramName, paramValue){
    // Retorna si el parámetro está declarado o si es de tipo string
    if (!paramValue){ 
        return {'result': false, 'error': Error(`No has asignado ningún valor al parámetro <${paramName}>`)}
    }
    if ((typeof paramValue) !== 'string'){
        return {'result': false, 'error': Error(`El valor debe de ser de tipo string. ${paramValue} es tipo ${typeof paramValue}.`)}        
    }

    return {'result': true, 'error': null}
}

export function isNumber(paramName, paramValue){
    // Retorna si el parámetro está declarado o si es de tipo number    
    if (!paramValue){ 
        return {'result': false, 'error': Error(`No has asignado ningún valor al parámetro <${paramName}>`)}
    }
    if ((typeof paramValue) !== 'number'){
        return {'result': false, 'error': Error(`El valor debe de ser de tipo number. ${paramValue} es tipo ${typeof paramValue}.`)}        
    }

    return {'result': true, 'error': null}
}