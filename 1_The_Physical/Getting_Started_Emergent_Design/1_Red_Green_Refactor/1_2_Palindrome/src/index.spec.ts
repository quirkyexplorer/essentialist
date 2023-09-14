import { isItPalindrome } from './index'

describe('palindrome checker', () => {

    it('detects a string "wow" is a palindrome', () => {
        const result = isItPalindrome('wow');
        expect(result).toBeTruthy();
    }); 

    it('detects string "Wow" is still a palindrome', () => {
        const result = isItPalindrome('Wow');
        expect(result).toBeTruthy();
    });

    it('detects string "WoW" is still a palindrome', () => {
        const result = isItPalindrome('WoW');
        expect(result).toBeTruthy();
    });

})