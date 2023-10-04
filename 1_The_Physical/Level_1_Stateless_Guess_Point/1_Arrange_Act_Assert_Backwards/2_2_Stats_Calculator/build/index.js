"use strict";
// Responsibilities :
// receive an array of numbers, empty, one, or many
// process - find min 
// process - find max 
// process - find length
// process - find average
// process - create object with above characteristics
// 
Object.defineProperty(exports, "__esModule", { value: true });
// creating an object based on the interface 
var stats = {
    min: 0,
    max: 0,
    average: 0,
    length: 1,
    error: null
};
function findMin(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        console.log("working");
    }
}
function findMax() {
}
function findAverage() {
}
function findLength() {
}
function findStats(numbers) {
    var result = findMin(numbers);
    return (stats);
}
exports.default = findStats;
