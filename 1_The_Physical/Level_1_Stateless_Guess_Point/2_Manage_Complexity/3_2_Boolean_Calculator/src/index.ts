function parseBoolean(value: string) {
    if( value == "TRUE") 
        return true

    else if (value == "FALSE")
        return false

}

function evaluateNots(value: string) {
    return !parseBoolean(value);
}

function evaluateAnds(string: string):any {
    const array = string.split(' ');
    
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

function evaluateOrs(string: string):any {
    const array = string.split(' ');

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


function booleanReducer(array: string[]):any {
    let i = 0;
    let j = 0;

    while(j <= array.length && array.includes("AND")) {
        let string =  `${array[j]} ${array[j + 1]} ${array[j + 2]}`;

        if (string.includes("AND")) {
            let andIndex = array.indexOf("AND");
            let start = andIndex - 1;
            let end = andIndex + 2;
            array.splice(start, end);
            array.splice(start, 0, evaluateAnds(string));
        }
        j = j + 2;
    }

    while (i <= array.length && array.includes("OR")) {
        let string =  `${array[i]} ${array[i + 1]} ${array[i + 2]}`;
        if (string.includes("OR")) {
            let andIndex = array.indexOf("OR");
            let start = andIndex - 1;
            let end = andIndex + 2;
            array.splice(start, end);
            array.splice(start, 0, evaluateOrs(string));     
        }
        
        i = i + 2;
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

    // return parseBoolean(value);

}


    

