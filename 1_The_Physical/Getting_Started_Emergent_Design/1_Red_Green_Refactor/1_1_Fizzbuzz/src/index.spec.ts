import { fizzbuzz } from "./fizzbuzz" 

describe("fizzbuzz", () => {
    test("should return fizz", () => {
        const result = fizzbuzz(3);
        expect(result).toBe("fizz");
    });

    test("should return buzz", () => {
        const result = fizzbuzz(5);
        expect(result).toBe("buzz"); 
    });

    test("should return Fizzbuzz", () => {
        const result = fizzbuzz(15);
        expect(result).toBe("fizzbuzz");

    });
    
    test("should return Fizz", () => {
        const result = fizzbuzz(9);
        expect(result).toBe("fizz");

    });

    test("should return 43", () => {
        const result = fizzbuzz(43);
        expect(result).toBe("43");

    });

    test("should return fizz", () => {
        const result = fizzbuzz(42);
        expect(result).toBe("fizz");

    });

    test("should return 45", () => {
        const result = fizzbuzz(45);
        expect(result).toBe("fizzbuzz");

    });

    test("should return fizz", () => {
        const result = fizzbuzz(102);
        expect(result).toBe("fizz");

    });

    test("should return error negative number", () => {
        const result = fizzbuzz(-12);
        expect(result).toBe("error negative number");

    });
});
