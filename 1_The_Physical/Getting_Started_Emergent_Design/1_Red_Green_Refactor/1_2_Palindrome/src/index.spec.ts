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

    it('detects string "WoWx" is not a palindrome', () => {
        const result = isItPalindrome('WoWx');
        expect(result).toBeFalsy();
    });

    it('detects string "xWowx" is still a palindrome', () => {
        const result = isItPalindrome('xWowx');
        expect(result).toBeTruthy();
    });

    it('detects string "Was It A Rat I Saw" is still a palindrome', () => {
        const result = isItPalindrome('Was It A Rat I Saw');
        expect(result).toBeTruthy();
    });

})