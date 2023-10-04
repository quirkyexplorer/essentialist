
// Responsibilities :
// receive an array of numbers, empty, one, or many
// process - find min 
// process - find max 
// process - find length
// process - find average
// process - create object with above characteristics
// 

// examples 
//  input [] -> output error: invalid data
// input [0] -> output min 0, max 0, length 1, avrg 0
// input [2,4,21,-8,53,40] -> output min -8, max 53, elements 6, avrg 18.6667 


interface Stats {
    min: number | null;
    max:  number | null;
    average:  number | null;
    length:  number | null;
    error: string | null;
}


function findMin(numbers: number[]){
    let min = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min ) {
            min = numbers[i];
        } 
    }
    return min;
}

function findMax(numbers: number[]){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max
}

function findAverage(numbers: number[]) {
    return numbers.reduce((accumulator, num) => accumulator + num, 0) / numbers.length;

}

function findLength(numbers: number[]) {
    return numbers.length;
}

function createStats(numbers: number[]) {
    // creating initial object based on the interface 
    const stats: Stats = {
        min: null,
        max: null,
        average: null,
        length: null,
        error: null
    }
    
    if (numbers.length === 0) {
        stats.error = 'invalid input';
    } else {
        stats.min = findMin(numbers);
        stats.max = findMax(numbers);
        stats.average = findAverage(numbers);
        stats.length = findLength(numbers);
    }

    return stats
}

export default function findStats(numbers: number[]) {

    return createStats(numbers);
}