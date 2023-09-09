import { fizzbuzz } from './fizzbuzz';

describe("fizzbuzz", () => {
    test("returns fizz on 3", () => {
        const result = fizzbuzz(3);
        expect(result).toBe("fizz")
    })

});
