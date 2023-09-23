
export default function validate(input: string): boolean {
    if (input.length < 5 || input.length > 15) {
        return false
    }
    return true;


}