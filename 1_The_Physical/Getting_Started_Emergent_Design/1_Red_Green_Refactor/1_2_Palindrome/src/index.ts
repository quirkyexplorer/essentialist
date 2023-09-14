export function isItPalindrome(input: String): boolean {
    
    const result = input.split('').reverse().join('').toLowerCase().replace(/\s/g, '');
    //console.log(result);
    return result === input.toLowerCase().replace(/\s/g, '');
} 