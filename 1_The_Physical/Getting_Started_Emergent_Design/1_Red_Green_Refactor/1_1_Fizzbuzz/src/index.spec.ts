import { fizzbuzz } from "./fizzbuzz" 

describe("fizzbuzz, returns fizz if number is multiple of 3, buzz if multiple of 5, fizzbuzz if both, or the number itself otherwise", () => {
    test("should return fizz", () => {
        const result = fizzbuzz(3);
        expect(result).toBe("fizz");
    });
});
