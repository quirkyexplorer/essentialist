
export function fizzbuzz(input: number): string {

    function fizz(input: number) {
        if(input % 3 === 0) {
            return true;
        }
    }

    function buzz(input: number) {
        if(input % 5 === 0) {
            return true;
        }
    }
   

    switch (true) {
        case input < 0 || input > 100:
            return "error: input out of range, should be between 1 & 100";
        case fizz(input) && buzz(input):
            return "fizzbuzz";
        case fizz(input):
            return "fizz";
        case buzz(input):
            return "buzz";
        default:
            return input.toString();
    }
}