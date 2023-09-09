
export function fizzbuzz(input: number): string {
    switch (true) {
        case input % 3 === 0 && input % 5 === 0:
            return "fizzbuzz";
        case input < 0:
            return "error negative number";
        case input % 3 === 0:
            return "fizz";
        case input % 5 === 0:
            return "buzz";
        default:
            return input.toString();
    }
}