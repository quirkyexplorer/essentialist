export function isItPalindrome(input: String): boolean {
    
    const result = input.split('').reverse().join('').toLowerCase();
   // console.log(result);
    return result === input.toLowerCase();
} 