function parseBoolean(value: string) {
    if( value == "TRUE") 
        return true

    else if (value == "FALSE")
        return false

}

function evaluateNots(value: string):any {
    if( value == "NOT TRUE") 
        return "FALSE"

    else if (value == "NOT FALSE")
        return "TRUE"
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

    if ( array[0] == "FALSE" && array[0] == array[2]) {
        return "FALSE"
    }

    if (array[0] == "FALSE" && array[2] == "TRUE") {
        return "TRUE"
    }

    if (array[0] == "TRUE" && array[2] == "FALSE") {
        return "TRUE"
    }
}



function booleanReducer(array: string[]):any {
    let i = 0;
    let j = 0;
    let a = 0;
    
    if (array.includes("NOT")) {
        while(a <= array.length && array.includes("NOT")) {
            let string =  `${array[a]} ${array[a + 1]}`;
            if(string.includes("NOT")) {
                let andIndex = array.indexOf("NOT");
                let end = andIndex + 2;
                array.splice(andIndex, end, evaluateNots(string));
                // array.splice(andIndex, 0, evaluateNots(string));
            }
            
            a = a + 2;  
        }
    }

    if (array.includes("AND")) {
      let index1 = 0
        while(j <= array.length + 2) {
            
            let index2 = index1 + 1;
            let index3 = index1 + 2;
            let string =  `${array[index1]} ${array[index2]} ${array[index3]}`;
            if (string.includes("AND")) { 
                let andIndex = array.indexOf("AND");
                let start = andIndex - 1;
                let end = andIndex + 2;
                array.splice(start, 3, evaluateAnds(string));
            } else {
                index1 +=2
            }

            j = j + 2;
        }
    }

    if (array.includes("OR")) {
      let part1 = 0;
       while (i <= array.length + 2) {
        
        let part2 = part1 + 1;
        let part3 = part1 + 2;
        let string =  `${array[part1]} ${array[part2]} ${array[part3]}`;
        
        
        if (string.includes("OR")) {
            let orIndex = array.indexOf("OR");
            let start = orIndex - 1;
            let end = orIndex + 2;
            let spliceMaterial = array.splice(start, 3, evaluateOrs(string));  
        }

        i = i + 2;
        } 
    }

  
 
    return array;
}

function solveParentheses(value: string) {
    const matches = value.match(/\(([^)]+)\)/);
    let answer;
    if (matches && matches.length > 1) {
        const noParentheses = matches[1];
        console.log("noParentheses", noParentheses);
        const array = noParentheses.split(" ");
        answer = booleanReducer(array);
        
      }

    return answer;

}

export function EvaluateBoolean(value: string) {
    
    if (value.includes("(") || value.includes(")")) {
        console.log(solveParentheses(value));
        solveParentheses(value);

    }
        
    const array = value.split(' ');
    if (array) {
        const result = booleanReducer(array);
        const answer = result[0];
        return parseBoolean(answer);
        
    }

}


    

