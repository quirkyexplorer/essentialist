

export default function validate(input: string) {

    const message = {
        isValid: true,
        error: {} as Record<string, string>
        // error: null as null | string // type assertion in typescript, error can be either null or string
    }

    if (input.length < 5 || input.length > 15) {
        message.isValid = false
        message.error.Length = "password must be between 5 and 15 characters"
    }
    
    if (!/[0-9]/.test(input)) {
        message.isValid = false
        message.error.Digit = 'password must have at least one digit'
    }

    if (!/[A-Z]/.test(input)) {
        message.isValid = false
        message.error.Case = 'password must have at least one Uppercase'
    }

    

    console.log(message);
    return message;

}