
function parseBoolean(value: string) {
    if( value == "TRUE") 
        return true

    else if (value == "FALSE")
        return false

}

function parseOperator(value: string) {
    return 
}

export function EvaluateBoolean(value: string) {

    const array = value.split(' ')
    console.log(array );
    
    if (array[0] == "NOT") {
        return !parseBoolean(array[1]);
    }


    return parseBoolean(value);

}