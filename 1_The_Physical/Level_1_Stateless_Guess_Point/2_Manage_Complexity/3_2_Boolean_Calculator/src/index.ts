function parseBoolean(value: string) {
    if( value == "TRUE") 
        return true

    else if (value == "FALSE")
        return false

}

function evaluateNots(value: string) {
    return !parseBoolean(value);
}

function evaluateAnds(array: string[]) {
    
    if (array[0] == "TRUE" && array[2] == "TRUE") {
        return "TRUE"
    }

    if (array[0] == "FALSE" && array[2] == "FALSE") {
        return "FALSE"
    }

    if (array[0] != array[2]) {
        return "FALSE"
    }
}

function evaluateOrs(array: string[]) {

    if (array[0] == "TRUE" || array[2] == "TRUE") {
        return "TRUE"
    }

    if (array[0] == "FALSE" || array[2] == "FALSE") {
        return "FALSE"
    }

    if (array[0] != array[2]) {
        return "TRUE"
    }
}

// function statementBreaker(array: string[]) {
//     const and = "AND";
//     let index = array.indexOf(and);
//     let element = array[array.indexOf(and)];
//     const statement = array[index - 1] + " " + element + " " + array[index + 1];
//     console.log(EvaluateBoolean(statement));
//     return statement
// }

function evaluateAndsOrs(statement: string):any {
    const array = statement.split(' ')
    if (array.includes("AND") && array.length == 3) {
        return evaluateAnds(array);
    }

    else if (array.includes("OR") && array.length == 3) {
        return evaluateOrs(array);
    }
}

function booleanReducer(array: string[]):any {
    let i = 0;
    let string = ''
    while (array.length >= 3) {
        string =  `${array[i]} ${array[i + 1]} ${array[i + 2]}`;
        array.splice(0,3);
        array.unshift(evaluateAndsOrs(string));
        i += i;
    }
    return array;
}

export function EvaluateBoolean(value: string) {

    const array = value.split(' ')
    
    if (array[0] == "NOT") {
        return !parseBoolean(array[1]);
    }
    
    else if (array) {
        const resultArray = booleanReducer(array);
        const answer = resultArray[0];
        return parseBoolean(answer);
    }

    return parseBoolean(value);

}

function rearrangeOrder() {

// this function should rearrange the array in statements so that 
// ANDs come before ORs

}


    

