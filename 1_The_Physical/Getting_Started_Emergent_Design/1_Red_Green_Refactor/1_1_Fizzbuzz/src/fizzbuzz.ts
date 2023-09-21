
export function fizzbuzz(input: number): string {

    function fizz(input: number) {
        if(input % 3 === 0) {
            return true;
        }
    }

   

    switch (true) {
        case input % 3 === 0 && input % 5 === 0:
            return "fizzbuzz";
        case input < 0:
            return "error negative number";
        case fizz(input):
            return "fizz";
        case input % 5 === 0:
            return "buzz";
        default:
            return input.toString();
    }
}