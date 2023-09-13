import { isItPalindrome } from './index'

describe('palindrome checker', () => {
    it('detects a string is a palindrome', () => {
        const result = isItPalindrome('wow');
        expect(result).toBe(true);
    }) 
})