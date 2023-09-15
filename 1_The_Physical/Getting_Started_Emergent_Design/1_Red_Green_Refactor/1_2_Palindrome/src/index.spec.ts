import { PalindromeCheck } from './index'

describe('palindrome checker', () => {

    let palindromeCheck: PalindromeCheck;

    beforeEach(() => {
        palindromeCheck = new PalindromeCheck();
    });

    const testCases: [string, boolean][] = [
        ["wow", true],
        ["Wow", true],
        ["WoW", true],
        ["WoWx", false],
        ["xWowx", true],
    ];
    
    it.each(testCases)(
        'detects string "%s" is palindrome: %p',
        (input: string, expected: boolean) => {
            expect(palindromeCheck.isItPalindrome(input)).toBe(expected);
        }
    );

    const phraseCases: [string, boolean][] = [
        ["Was It A Rat I Saw", true],
        ["Never Odd or Even", true],
        ["Never Odd or Even1", false],
        ["1Never Odd or Even1", true]
    ];

    it.each(phraseCases)(
        'detects string "%s" is palindrome: %p',
        (input: string, expected: boolean) => {
            expect(palindromeCheck.isItPalindrome(input)).toBe(expected);
        }
    );


})

