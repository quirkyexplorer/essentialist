
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
    min: number;
    max: number;
    average: number;
    length: number;
    error: string | null;
}

// creating an object based on the interface 
const stats: Stats = {
    min: 0,
    max: 0,
    average: 0,
    length: 0,
    error: 'invalid data'
}

function findMin(){

}

function findMax(){

}

function findAverage() {

}

function findLength() {

}

export default function findStats(numbers: number[]) {



    return (
        stats
    );
}