
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

    if (array.includes("AND")) {
        if (array[0] == "TRUE" && array[2] == "TRUE") {
            return true
        }

        if (array[0] == "FALSE" && array[2] == "FALSE") {
            return false
        }

        if (array[0] != array[2]) {
            return false
        }

    }


    return parseBoolean(value);

}